import { categoryMapper } from "@/src/mappers/categoryMapper";
import { serverMapper } from "@/src/mappers/serverMapper";
import { fetchHttpAdapter, type httpClient } from "@/src/service";
import type { ICategory } from "@/src/types/ICategory";
import type { IServer } from "@/src/types/IServer";
import HomeBanner from "./sections/baner/home.banner";
import HomeItems from "./sections/items/home.items";

interface Props {
	params: {
		server: string;
	};
}

async function getAllCategory(httpClient: httpClient<ICategory[]>, serverId: string) {
	const data = await httpClient.request({
		url: `/findAllCategory?serverId=${serverId}`,
		method: "get",
	});
	return {
		status: data.statusCode,
		body: categoryMapper(data.body),
	};
}

async function getServer(httpClient: httpClient<IServer>, server: string) {
	const data = await httpClient.request({
		url: `/findServer?slug=${server}`,
		method: "get",
	});
	return {
		status: data.statusCode,
		body: serverMapper(data.body),
	};
}

export default async function Home({ params }: Props) {
	const server = await getServer(fetchHttpAdapter, params.server);
	const categories = await getAllCategory(fetchHttpAdapter, server.body.id);

	return (
		<main>
			<HomeBanner banner={server.body.banner} />
			<HomeItems categories={categories.body} slug={server.body.slug} />
		</main>
	);
}
