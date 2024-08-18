import { axiosHttpAdapter, type httpClient } from "@/src/service";
import type { ICategory } from "@/src/types/ICategory";
import type { IProduct } from "@/src/types/IProduct";
import { useEffect, useState } from "react";

interface ISelectComponent {
	categories: ICategory[];
	setNewProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export default function SelectCategories({ categories, setNewProducts }: ISelectComponent) {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const toggleCategory = (categoryId: string) => {
		setSelectedCategories((prevSelectedCategories) => {
			if (prevSelectedCategories.includes(categoryId)) {
				return prevSelectedCategories.filter((id) => id !== categoryId);
			}
			return [...prevSelectedCategories, categoryId];
		});
	};

	const findAllProducts = async (httpClient: httpClient, params: any): Promise<any> => {
		return await httpClient.request({
			url: `/findAllProduct?${params.toString()}`,
			method: "get",
		});
	};

	useEffect(() => {
		const getProductsByCategories = async () => {
			const params = new URLSearchParams();
			params.append("serverId", process.env.NEXT_PUBLIC_SERVER_ID || "");
			selectedCategories.forEach((categoryId) => {
				params.append("categoryId", categoryId);
			});

			const data = await findAllProducts(axiosHttpAdapter, params.toString());
			setNewProducts(data);
		};

		getProductsByCategories();
	}, [selectedCategories, setNewProducts]);

	return (
		<div className="w-1/4">
			<p className="mb-5 text-2xl font-bold">Categorias</p>
			{categories.map((category) => (
				<div className="mb-3 flex items-center gap-2" key={category.id}>
					<input
						onClick={() => toggleCategory(category.id)}
						className="h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-black/50 bg-white checked:border-0 checked:bg-blue-800 hover:border-blue-800"
						type="checkbox"
					/>
					<p className="text-base">{category.name}</p>
				</div>
			))}
		</div>
	);
}
