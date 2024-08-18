"use client";

import { axiosHttpAdapter, type httpClient } from "@/src/service";
import type { Iuser } from "@/src/types/Iuser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	password: z.string(),
	email: z.string().email("Email inválido"),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		// mode: 'onChange',
		// reValidateMode: 'onChange',
	});

	const loginUser = async (httpClient: httpClient, data: any): Promise<Iuser> => {
		return await httpClient.request({
			url: "/loginUser",
			method: "post",
			body: data,
		});
	};

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		try {
			const dataUser = await loginUser(axiosHttpAdapter, data);

			const userData = {
				token: dataUser?.data?.token,
				name: dataUser?.data?.name,
				refreshToken: dataUser?.data?.refreshToken?.id,
			};

			setCookie(null, "blume_user_data", JSON.stringify(userData), {
				maxAge: 30,
			});

			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex w-[400px] flex-col items-center gap-4">
				<h3 className="font-bold text-2xl">FAZER LOGIN</h3>
				<div className="flex w-full flex-col">
					<label className="text-xs">Email</label>
					<input className="h-8 border" {...register("email")} placeholder="Email" />
				</div>
				<div className="flex w-full flex-col">
					<label className="text-xs">Password</label>
					<input className="h-8 border" {...register("password")} placeholder="Password" />
				</div>
				<button className="h-8 w-full bg-blue-500 text-white" type="submit">
					ENTRAR
				</button>
				<p className="text-xs underline">Esqueci minha senha</p>
			</div>
		</form>
	);
}
