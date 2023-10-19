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
      setCookie(null, 'blume_user_id', dataUser.data.id);
      setCookie(null, 'blume_refresh_token', dataUser.data.refreshToken.id);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>LOGIN</h3>
          <input {...register('email')} placeholder='Email'></input>
          <input {...register('password')} placeholder='Password'></input>
        </div>
        <button type='submit'>ENTRAR</button>
      </form>
    </div>
  );
}
