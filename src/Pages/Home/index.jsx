import { useFetch } from '../../Components/Api';
import Card from '../../Components/Cards';
import Layout from '../../Components/Layout';

function Home() {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://api.escuelajs.co/api/v1', []);

  console.log(products);

  if (loading)
    return (
      <Layout>
        <div>Cargando...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );

  return (
    <Layout>
      <article className="grid place-items-center place-content-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80%] max-w-screen-xl">
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              category={product.category?.name}
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          ))}
      </article>
    </Layout>
  );
}

export default Home;
