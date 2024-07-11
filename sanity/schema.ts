import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		{
			name: "dev-blog",
			type: "document",
			title: "Dev Blog",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Post Title",
				},
				{
					name: "subtitle",
					type: "string",
					title: "Subtitle",
				},
				{
					name: "slug",
					type: "slug",
					title: "Slug",
				},
			],
		},
	],
};
