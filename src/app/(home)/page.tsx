import type { ICategory } from "@/src/types/ICategory";
import { url, serverId } from "@/src/utils/url";
import HomeBanner from "./sections/baner/home.banner";
import HomeItems from "./sections/items/home.items";

async function getAllCategory(): Promise<ICategory[]> {
	try {
		const response = await fetch(`${url}/findAllCategory?serverId=${serverId}`);
		return response.json();
	} catch (error) {
		return [];
	}
}

export default async function Home() {
	const response = await getAllCategory();

	return (
		<main>
			<HomeBanner />
			<HomeItems categories={response} />
		</main>
	);
}
