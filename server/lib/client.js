import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "1yz9oe8x",
  dataset: "production",
  apiVersion: "2025-01-17",
  useCdn: true,
  token: import.meta.env.VITE_TOKENID,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
