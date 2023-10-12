'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/src/service/api';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Campo obrigatório')
    .refine((a) => a.trim() !== '', 'Campo obrigatório'),
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
      await api.post('/createUser', data);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <h3>LOGIN</h3>
          <input {...register('username')} placeholder='Username'></input>
          <input {...register('password')} placeholder='Password'></input>
        </div> */}
        <div>
          <h3>CADASTRAR</h3>
          <input {...register('name')} placeholder='Username'></input>
          <input {...register('password')} placeholder='Password'></input>
          <input {...register('email')} placeholder='Email'></input>
        </div>
        <button type='submit'>ENTRAR</button>
      </form>
    </div>
  );
}
