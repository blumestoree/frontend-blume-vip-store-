"use client";

import ProductCard from "@/src/components/productCard";
import type { ICategory } from "@/src/types/ICategory";
import type { IProduct } from "@/src/types/IProduct";
import { useState } from "react";
import SelectCategories from "./filters/categories";
import SelectComponent from "./filters/select";

export default function Producs({
	products,
	categories,
}: {
	products: IProduct[];
	categories: ICategory[];
}) {
	const [newProducts, setNewProducts] = useState<IProduct[]>(products);

	return (
		<div className="grid-style">
			<div className="flex justify-between py-10">
				<div>Resultados {products.length}</div>
				<SelectComponent setNewProducts={setNewProducts} />
			</div>
			<div className="flex">
				<SelectCategories categories={categories} setNewProducts={setNewProducts} />
				<div className="grid w-3/4 grid-cols-3 gap-6">
					{newProducts.map((product) => (
						<div key={product?.id}>
							<ProductCard key={product?.id} product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
