"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
        
      <div className="flex items-center justify-between mx-auto  px-4 sm:px-6 ">

        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600">
            Zain<span className="text-primary">Bux</span>
          </h1>
        </Link>

        <div className="flex text-center items-center space-x-5">
            <nav className="hidden gap-10 lg:flex 2xl:ml-16">
            {links.map((link, idx) => (
                <div key={idx}>
                {pathname === link.href ? (
                    <Link
                    className="text-lg font-semibold text-red-600"
                    href={link.href}
                    >
                    {link.name}
                    </Link>
                ) : (
                    <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    >
                    {link.name}
                    </Link>
                )}
                </div>
            ))}
            </nav>

            <div className="flex divide-x border-r sm:border-l">
            <Button
                variant={"outline"}
                onClick={() => handleCartClick()}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
                <ShoppingBag />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
                </span>
            </Button>
            </div>            
        </div>



      </div>
    </header>
  );
}