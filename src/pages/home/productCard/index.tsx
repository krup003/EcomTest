import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useState } from "react";

interface ProductCardsProps {
  img: string;
  price: string;
  title: string;
  id: number;
  description: string;
}

const ProductCards = ({
  img,
  price,
  title,
  id,
  description,
}: ProductCardsProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addingCart, setAddingCart] = useState<boolean>(false);

  const handleCart = () => {
    setAddingCart(true);
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        image: img,
        description: description,
        quantity: 1,
      })
    );
    setTimeout(() => {
      setAddingCart(false);
    }, 2000);
  };

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div
          className="cursor-pointer"
          onClick={() => navigate(`/productDetails/${id}`)}
        >
          <img
            className="p-8 rounded-t-lg"
            src={img}
            height={250}
            width={250}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <div
              // onClick={() => navigate("/cart")}
              onClick={handleCart}
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {addingCart ? "Adding to cart..." : "Add to cart"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
