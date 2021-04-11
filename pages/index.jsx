import Head from 'next/head'
import { useCallback } from 'react';
import { getAllProducts } from "../lib/productStore";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home({ products }) {
  const router = useRouter();

  const viewProductDetails = useCallback((productId) => {
    router.push(`/${productId}`)    
  }, [router]);

  const productElements = products.map(data => {
        return (
          <div key={data.id} className="product-card" onClick={() => viewProductDetails(data.id)}>
            <div className="product-card-header">
              <Image
                src={
                  data.img
                }
                alt={data.description}
                width={94.500}
                height={94.500}
              />
            </div>
            <p className="price-tag">{data.price}</p>
            <p className="product-description">{data.description}</p>
            <button onClick={() => {}}>Add to trolley</button>
          </div>
        );
  });

  return (
    <div className="product-list">
      <div className="product-list-inner">
        {productElements}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await getAllProducts();

  return {
    props: { products }, // will be passed to the page component as props
  }
}
