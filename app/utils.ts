import { client } from "@/sanity/lib/client";

export async function getHeroImages() {
    const query = `*[_type == "heroImage"][0]`;
  
    const data = await client.fetch(query);
  
    return data;
  }