export interface httpRequest {
	url: string;
	method: "get" | "post" | "put" | "delete";
	body?: any;
	headers?: any;
}

export interface httpClient<T = any> {
	request(data: httpRequest): Promise<T>;
}
