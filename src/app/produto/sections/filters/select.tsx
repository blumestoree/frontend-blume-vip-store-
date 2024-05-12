"use client";

import { api } from "@/src/service/api";
import type { IProduct } from "@/src/types/IProduct";
import Select from "react-select";

const options: { label: string; value: string | undefined }[] = [
	{ label: "Mais recentes", value: "" },
	{ label: "Menor preço", value: "desc" },
	{ label: "Maior preço", value: "asc" },
];

interface ISelectComponent {
	setNewProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export default function SelectComponent({ setNewProducts }: ISelectComponent) {
	const getProductsWithFilter = async (sort?: string) => {
		const { data } = await api.get(
			`/findAllProduct?serverId=${process.env.NEXT_PUBLIC_SERVER_ID}&sort=${sort}`,
		);
		setNewProducts(data);
	};

	return (
		<Select
			className="w-[200px]"
			onChange={(e) => getProductsWithFilter(e?.value)}
			defaultValue={options[0]}
			options={options}
		/>
	);
}
