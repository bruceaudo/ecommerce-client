import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";

type ProductCard2Props = {
  title: string;
  price: string;
  imageURL: string;
  link: string;
};

const ProductCard2: React.FC<ProductCard2Props> = ({
  title,
  price,
  imageURL,
  link
}) => {
  return (
    <div className="w-full lg:h-72 sm:h-96 h-fit py-3 bg-white border rounded-lg cursor-pointer hover:shadow-lg">
      <Link href={`/product/${link}`}>
        <div className="h-4/5 flex items-center justify-center">
          <Image
            src={imageURL}
            alt="product_image"
            width={250}
            height={250}
          />
        </div>
        <div className="h-1/5 w-[90%] mx-auto font-semibold text-sm">
          <div className="md:flex hidden h-4/5 border p-3 rounded-full items-center justify-between w-full">
            <p className="truncate w-1/2">
              {title}
            </p>
            <p className="text-white w-fit bg-green-500 rounded-full py-1.5 px-2">
              {price}
            </p>
          </div>

          {/**Mobile */}
          <div className="sm:hidden flex flex-col gap-y-3">
            <p>
              {title}
            </p>
            <p className="text-white w-fit bg-green-500 rounded-full py-1.5 px-2">
              {price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard2;
