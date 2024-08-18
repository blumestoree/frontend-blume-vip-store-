import { fetchHttpAdapter, type httpClient } from "@/src/service";
import type { ICategory } from "@/src/types/ICategory";
import { serverId } from "@/src/utils/url";
import HomeBanner from "./sections/baner/home.banner";
import HomeItems from "./sections/items/home.items";

async function getAllCategory(httpClient: httpClient): Promise<ICategory[]> {
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

export default async function Home() {
	const response = await getAllCategory(fetchHttpAdapter);

	return (
		<main>
			<HomeBanner />
			<HomeItems categories={response} />
		</main>
	);
}
