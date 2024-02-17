
import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";


async function getData() {
  const query = `*[_type == "product"][0...99] {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
  console.log(data);

  return (
    <div className="W">

      <div className="">

        <div className="columns-3 gap-4 mx-auto p-5 space-y-4">
          {data.map((product) => (
            <div key={product._id} className="break-inside-avoid relative group">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.imageUrl}
                alt="Product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center text-2xl md:text-5xl font-bold">{product.name}</p>
              </div>
            </Link>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
}