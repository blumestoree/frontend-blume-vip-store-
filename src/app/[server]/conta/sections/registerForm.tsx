"use client";

import { createUserMapper } from "@/src/mappers/createUser";
import { axiosHttpAdapter, type httpClient } from "@/src/service";
import type { Iuser } from "@/src/types/Iuser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(3, "Campo obrigatório")
		.refine((a) => a.trim() !== "", "Campo obrigatório"),
	password: z.string(),
	email: z.string().email("Email inválido"),
	gameUserId: z.string(),
	nickname: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterForm() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		// mode: 'onChange',
		// reValidateMode: 'onChange',
	});

	const createUser = async (httpClient: httpClient<Iuser>, data: FormValues) => {
		return await httpClient.request({
			url: "/createUser",
			method: "post",
			body: {
				name: data.name,
				email: data.email,
				password: data.password,
				gameUserId: data.gameUserId,
				serverId: "1",
				nickname: data.nickname,
			},
		});
	};

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		try {
			const dataUser = await createUser(axiosHttpAdapter, data);
			const userData = createUserMapper(dataUser.body);
			setCookie(null, "blume_user_data", JSON.stringify(userData), {
				maxAge: 300000,
			});

			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex w-[400px] flex-col items-center gap-4">
				<h3 className="font-bold text-2xl">CRIAR CONTA</h3>
				<div className="flex w-full flex-col">
					<label className="text-xs">Nome</label>
					<input className="h-8 border" {...register("name")} placeholder="Name" />
				</div>
				<div className="flex w-full flex-col">
					<label className="text-xs">Email</label>
					<input className="h-8 border" {...register("email")} placeholder="Email" />
				</div>
				<div className="flex w-full flex-col">
					<label className="text-xs">Password</label>
					<input className="h-8 border" {...register("password")} placeholder="Password" />
				</div>
				<div className="flex w-full flex-col">
					<label className="text-xs">ID</label>
					<input className="h-8 border" {...register("gameUserId")} placeholder="ID no jogo" />
				</div>
				<div className="flex w-full flex-col">
					<label className="text-xs">Nome no jogo</label>
					<input className="h-8 border" {...register("nickname")} placeholder="Nome no jogo" />
				</div>
				<button className="h-8 w-full bg-blue-500 text-white" type="submit">
					CRIAR CONTA
				</button>
			</div>
		</form>
	);
}
