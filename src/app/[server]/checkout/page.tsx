"use client";

import { useCart } from "@/src/providers/shoppingCartProvider";
import { axiosHttpAdapter, type httpClient } from "@/src/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseCookies } from "nookies";
import { useState } from "react";
import CreditCard, { type Focused } from "react-credit-cards";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	installments: z.number(),
	creditCard: z.object({
		name: z.string(),
		number: z.string(),
		cvc: z.string(),
		expiryMonth: z.number(),
		expiryYear: z.number(),
	}),
});

type FormValues = z.infer<typeof formSchema>;

export default function Checkout() {
	const { register, handleSubmit, watch } = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		// mode: 'onChange',
		// reValidateMode: 'onChange',
	});

	const [focus, setFocus] = useState<Focused>("number");
	const number = watch("creditCard.number");
	const name = watch("creditCard.name");
	const expiryMonth = watch("creditCard.expiryMonth");
	const expiryYear = watch("creditCard.expiryYear");
	const cvc = watch("creditCard.cvc");
	const { cartItems } = useCart();

	// handleInputFocus = (e) => {
	//  setState({ focus: e.target.name });
	// }

	const buyProduct = async (httpClient: httpClient, data: any): Promise<any> => {
		return await httpClient.request({
			url: `/buyProduct${parseCookies().blume_user_id}`,
			method: "post",
			body: data,
		});
	};

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		await buyProduct(axiosHttpAdapter, {
			productId: cartItems.map((product) => {
				return product.id;
			}),
			installments: data.installments,
			cardInfos: {
				cardNumber: data.creditCard.number,
				holderName: data.creditCard.name,
				expMonth: data.creditCard.expiryMonth,
				expYear: data.creditCard.expiryYear,
				cvv: data.creditCard.cvc,
			},
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p>Forma de pagamento</p>

				<p>Cartão de crédito</p>
				<input
					{...register("installments", {
						setValueAs: (v: string) => Number(v),
					})}
					placeholder="parcelas"
				/>
				<input
					placeholder="Nome"
					onFocus={() => setFocus("name")}
					{...register("creditCard.name")}
				/>
				<input
					placeholder="Número"
					onFocus={() => setFocus("number")}
					{...register("creditCard.number")}
				/>
				<input placeholder="CVC" onFocus={() => setFocus("cvc")} {...register("creditCard.cvc")} />
				<input
					placeholder="Validade mes"
					onFocus={() => setFocus("expiry")}
					{...register("creditCard.expiryMonth", {
						setValueAs: (v: string) => Number(v),
					})}
				/>
				<input
					placeholder="Validade ano"
					onFocus={() => setFocus("expiry")}
					{...register("creditCard.expiryYear", {
						setValueAs: (v: string) => Number(v),
					})}
				/>
				<CreditCard
					name={name || ""}
					focused={focus}
					expiry={expiryYear && expiryMonth ? `${expiryMonth}/${expiryYear}` : "****"}
					locale={{ valid: "VALIDADE" }}
					number={number || "**** **** **** ****"}
					cvc={cvc || "***"}
					placeholders={{ name: "name" }}
					// preview
				/>
				<button type="submit">FINALIZAR</button>
			</form>
		</div>
	);
}
