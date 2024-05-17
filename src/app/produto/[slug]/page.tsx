import type { IProduct } from "@/src/types/IProduct";
import { notFound } from "next/navigation";
import ProductInfos from "../sections/product.infos";
import { fetchHttpAdapter, httpClient } from "@/src/service";

interface Props {
	params: {
		slug: string;
	};
}

async function getProdutcData(httpClient: httpClient, slug: string): Promise<IProduct> {
	const response = await httpClient.request({
		url: `/findProduct/${slug}`,
		method: "get",
	});
	if (response.statusCode === 404) {
		notFound();
	}
	return response.body;
}

export default async function Product({ params }: Props) {
	const product = await getProdutcData(fetchHttpAdapter, params.slug);

	return (
		<div>
			<ProductInfos product={product} />
		</div>
	);
}
