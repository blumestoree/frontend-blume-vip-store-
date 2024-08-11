import { createUserMapper } from "@/src/mappers/createUser";
import { fetchHttpAdapter, type httpClient } from "@/src/service";
import type { Iuser, IuserApi } from "@/src/types/Iuser";
import { cookies } from "next/headers";

async function getUser(httpClient: httpClient<IuserApi>, userId: string) {
	return await httpClient.request({
		url: `/findUser/${userId}`,
		method: "get",
	});
}

export default async function Dashboard() {
	const cookiesList = cookies();
	const userDataCookie = cookiesList.get("blume_user_data");
	const userData: Iuser = userDataCookie ? JSON.parse(userDataCookie.value) : null;
	const response = await getUser(fetchHttpAdapter, userData.id);
	const userDataMapper = createUserMapper(response.body);

	return (
		<main>
			<div className="h-20 w-20 bg-blue-500">
				{userDataMapper?.userOnServer?.map((item) => (
					<div key={item.id}>
						<p>{item.nickname}</p>
						<p>{item.server.name}</p>
					</div>
				))}
			</div>
		</main>
	);
}
