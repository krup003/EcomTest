import { useEffect, useState } from "react";
import ProductCards from "./productCard";
import { useNavigate } from "react-router-dom";

interface ProductsSchema {
  id: number;
  description: string;
  image: string;
  price: string;
  title: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productsData, setProductData] = useState<ProductsSchema[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        alert("Fetch failer");
      }
      const data = await response.json();
      setProductData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("productsData", productsData);

  return (
    <>
      <div>
        <h1>Products List</h1>
        <button onClick={() => navigate("/cart")}>CART</button>
        <div>
          {loading ? (
            <>Loading....</>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-4">
                {productsData.map((item, index) => {
                  return (
                    <div key={index}>
                      <ProductCards
                        description={item.description}
                        price={item.price}
                        img={item.image}
                        id={item.id}
                        title={item.title}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
