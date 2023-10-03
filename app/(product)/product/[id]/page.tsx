
import Image from "next/image";
import { Key } from "react";
import AddToCartButton from "../../ui/AddToCartButton";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:5000/api/v1/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  
  return <div>
      <section className="grid sm:grid-cols-[_2fr_1fr] grid-cols-1 min-h-[400px] gap-16 bg-white border rounded-lg p-8 mb-8">
        <div className="w-full flex flex-col items-center justify-center rounded-lg">
          
            <Image src={data.imageURL[0]} alt="Product_image" width={350} height={550} />
          
          {data.imageURL.length > 0 && <div className="flex items-center gap-3">
              {data.imageURL.map(
                (image: string, index: Key | null | undefined) =>
                  <div
                    className="border rounded-lg cursor-pointer flex items-center justify-center p-1.5 hover:border-green-500"
                    key={index}
                  >
                    <Image src={image} alt="product" width={80} height={80} />
                  </div>
              )}
            </div>}
        </div>
        <div>
          <h2 className="font-bold text-3xl mb-5">
            {data.title}
          </h2>
          <p className="text-white w-fit font-semibold mb-5 bg-green-500 rounded-full py-1.5 px-4">
            {data.price}
          </p>
          <div className="border-b w-full my-8" />
          <p className="mb-8">
            {data.description}
          </p>
          <AddToCartButton id={data._id} imageURL={data.imageURL[0]} title={data.title} price={data.price} />
        </div>
      </section>
      <section>Bottom section</section>
    </div>;
};
export default page;
