import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: import.meta.env.VITE_SANITY_ID,
	dataset: "production",
	useCdn: true,
	token: import.meta.env.VITE_SANITY_TOKEN,
	apiVersion: "2023-09-15",
});

const builder = imageUrlBuilder(client);
export const getImgUrl = (source: any) => builder.image(source);
