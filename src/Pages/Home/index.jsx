import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/index";
export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {" "}
        {items?.map((item, idx) => {
          return <Card key={idx} data={item} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
}
