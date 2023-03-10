import Layout from '@/components/Layout';
import Router, { useRouter } from 'next/router';
import data from '@/utils/data';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../utils/Store';

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);
  const [isCartItem, setIsCartItem] = useState(false);

  useEffect(() => {
    if (state.cart.cartItems.find((a) => a.slug === slug)) {
      setIsCartItem(true);
    }
  });

  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;

  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    <div>Product not found.</div>;
    return;
  }

  const addToCartHandler = () => {
    setIsCartItem(true);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
    router.push('/cart');
  };

  return (
    <Layout title={product.title}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>

      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add{isCartItem && 'ed'} to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
