import type { ICategory } from "@/src/types/ICategory";
import type { IProduct } from "@/src/types/IProduct";
import { url, serverId } from "@/src/utils/url";
import Producs from "./sections/product.allProducts";
import { fetchHttpAdapter, httpClient } from "@/src/service";

async function getAllProducts(httpClient: httpClient): Promise<IProduct[]> {
	try {
		const response = await httpClient.request({
			url: `/findAllProduct?serverId=${serverId}`,
			method: "get",
		});
		return response.body;
	} catch (error) {
		return [];
	}
}

async function getAllCategories(httpClient: httpClient): Promise<ICategory[]> {
	try {
		const response = await httpClient.request({
			url: `/findAllCategory?serverId=${serverId}`,
			method: "get",
		});
		return response.body;
	} catch (error) {
		return [];
	}
}

export default async function Products() {
	const products = await getAllProducts(fetchHttpAdapter);
	const categories = await getAllCategories(fetchHttpAdapter);

	return (
		<div>
			<Producs products={products} categories={categories} />
		</div>
	);
}
