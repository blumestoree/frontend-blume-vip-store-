import type { ICategory } from "@/src/types/ICategory";
import type { IProduct } from "@/src/types/IProduct";
import { url, serverId } from "@/src/utils/url";
import Producs from "./sections/product.allProducts";

async function getAllProducts(): Promise<IProduct[]> {
	try {
		const response = await fetch(`${url}/findAllProduct?serverId=${serverId}`);
		return response.json();
	} catch (error) {
		return [];
	}
}

async function getAllCategoriesr(): Promise<ICategory[]> {
	try {
		const response = await fetch(`${url}/findAllCategory?serverId=${serverId}`);
		return response.json();
	} catch (error) {
		return [];
	}
}

export default async function Products() {
	const products = await getAllProducts();
	const categories = await getAllCategoriesr();

	return (
		<div>
			<Producs products={products} categories={categories} />
		</div>
	);
}
