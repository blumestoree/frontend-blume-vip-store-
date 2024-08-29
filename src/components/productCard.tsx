"use client";

import Image from "next/image";
import Link from "next/link";
import TestImage from "/public/img/test.png";
import { useCart } from "../providers/shoppingCartProvider";
import type { IProductWithoutCategoryId } from "../types/IProduct";

interface IProductComponent {
	product: IProductWithoutCategoryId;
}

export default function ProductCard({ product }: IProductComponent) {
	const { addItem, setIsOpen } = useCart();

	return (
		<div className="group relative overflow-hidden rounded-lg border shadow-sm">
			<Link href={`produto/${product?.id}`} key={product?.id}>
				<Image
					src={TestImage}
					// src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}/${product?.image}`}
					width={285}
					height={300}
					alt="product-image"
				/>
			</Link>
			<div>
				<div className="flex h-[100px] flex-col justify-center px-3">
					<p className="text-lg">{product?.name}</p>
					<p className="my-2 text-xl font-bold">
						{product?.price?.toLocaleString("pt-br", {
							style: "currency",
							currency: "BRL",
						})}
					</p>
				</div>
				<div className="absolute bottom-0 h-[100px] w-full translate-y-full bg-blue-200 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
					<div className="flex flex-col justify-center gap-2 p-3">
						<button
							className="bg-[#00546B] p-1 text-white"
							onClick={() => {
								setIsOpen(true),
									addItem({
										id: product?.id,
										image: product?.image,
										name: product?.name,
										price: product?.price,
									});
							}}
						>
							Adicionar no carrinho
						</button>
						<Link className="border border-[#00546B] p-1 text-center" href={`/checkout`}>
							Comprar agora
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
