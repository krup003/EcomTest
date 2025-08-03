import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";

interface ProductDetailsSchema {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState<ProductDetailsSchema>();
  const [addingCart, setAddingCart] = useState(false);

  const handleCart = () => {
    setAddingCart(true);
    dispatch(
      addToCart({
        id: productDetails?.id,
        title: productDetails?.title,
        price: productDetails?.price,
        image: productDetails?.image,
        description: productDetails?.description,
        quantity: 1,
      })
    );
    setTimeout(() => {
      setAddingCart(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://fakestoreapi.com/products/${params.id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          alert("Fetch failer");
        }
        const data = await response.json();
        setProductDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      {loading ? (
        <>Loading....</>
      ) : (
        <>
          {" "}
          <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                  <img
                    className="w-full hidden dark:block"
                    src={productDetails?.image}
                    alt="Product img"
                  />
                </div>

                <div className="mt-6 sm:mt-8 lg:mt-0">
                  <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                    {productDetails?.title}
                  </h1>
                  <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                      ${productDetails?.price}
                    </p>
                  </div>

                  <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    <a
                      onClick={handleCart}
                      className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                      role="button"
                    >
                      <svg
                        className="w-5 h-5 -ms-2 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                        />
                      </svg>
                      {addingCart ? "Adding to cart..." : "Add to cart"}
                      {/* Add to cart */}
                    </a>
                  </div>

                  <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    {productDetails?.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
