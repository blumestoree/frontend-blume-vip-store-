import { fetchHttpAdapter, type httpClient } from "@/src/service";
import type { IServer } from "@/src/types/IServer";
import HomeBanner from "./sections/baner/home.banner";
import HomeItems from "./sections/items/home.items";
import { serverMapper } from "@/src/mappers/server";
import { ICategory } from "@/src/types/ICategory";

async function getAllCategory(httpClient: httpClient<ICategory[]>, serverId: string){
		const data = await httpClient.request({
			url: `/findAllCategory?serverId=${serverId}`,
			method: "get",
		});
		return {
			status: data.statusCode,
			body: data.body,
		}
}

async function getServer(httpClient: httpClient<IServer>, server: string) {
	const data = await httpClient.request({
		url: `/findServer?slug=${server}`,
		method: "get",
	});
	return {
		status: data.statusCode,
		body: serverMapper(data.body),
	}
}

export default async function Home({ params }: { params: { server: string } }) {
	const server = await getServer(fetchHttpAdapter, params.server);
	const categories = await getAllCategory(fetchHttpAdapter, server.body.id);

	return (
		<main>
			<HomeBanner banner={server.body.banner}/>
			<HomeItems categories={categories.body} />
		</main>
	);
}
