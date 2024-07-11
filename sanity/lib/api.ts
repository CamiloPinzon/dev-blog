import { client } from "./client";

export const getAllBlogs = async () =>
	await client.fetch(`*[_type == "dev-blog"]`);
