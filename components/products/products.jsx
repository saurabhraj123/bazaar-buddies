import ProductItem from './ProductItem';

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </>
  );
};

export default Products;
