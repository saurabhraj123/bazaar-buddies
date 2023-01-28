import Layout from '@/components/Layout';
import data from '@/utils/data';
import Products from '@/components/products/products';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Products products={data.products} />
      </div>
    </Layout>
  );
}
