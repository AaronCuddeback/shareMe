import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: true, // set to `false` to bypass the edge cache
  token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
