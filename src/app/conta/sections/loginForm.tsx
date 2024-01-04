'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/src/service/api';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { Iuser } from '@/src/types/Iuser';

const formSchema = z.object({
  password: z.string(),
  email: z
    .string()
    .nonempty('Este campo é obrigatório')
    .email('Email inválido'),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // mode: 'onChange',
    // reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const dataUser: Iuser = await api.post('/loginUser', data);
      setCookie(null, 'blume_token', dataUser.data.token);
      setCookie(null, 'user_name', dataUser.data.name);
      setCookie(null, 'blume_user_id', dataUser.data.id);
      setCookie(null, 'blume_refresh_token', dataUser.data.refreshToken.id);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex w-[400px] flex-col items-center gap-4'>
        <h3 className='text-2xl font-bold'>FAZER LOGIN</h3>
        <div className='flex w-full flex-col'>
          <label className='text-xs'>Email</label>
          <input
            className='h-8 border'
            {...register('email')}
            placeholder='Email'
          ></input>
        </div>
        <div className='flex w-full flex-col'>
          <label className='text-xs'>Password</label>
          <input
            className='h-8 border'
            {...register('password')}
            placeholder='Password'
          ></input>
        </div>
        <button className='h-8 w-full bg-blue-500 text-white' type='submit'>
          ENTRAR
        </button>
        <p className='text-xs underline'>Esqueci minha senha</p>
      </div>
    </form>
  );
}
