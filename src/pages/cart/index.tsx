import { useDispatch, useSelector } from "react-redux";
import type { Rootstate } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../redux/slices/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartedProductDetails = useSelector(
    (state: Rootstate) => state.cart.products
  );
  const totalPrice = useSelector((state: Rootstate) => state.cart.totalPrice);

  const handleAddQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleRemoveQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id:number) =>{
    dispatch(removeProduct(id))
  }

// const handleSortLowtoHigh = () => {
//   const sortedArray = [...cartedProductDetails].sort(
//     (a, b) => Number(a.price) - Number(b.price)
//   );
//   // setCartedProductDetails(sortedArray); 
// };

  console.log("cartttt", cartedProductDetails);

  return (
    <div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          {cartedProductDetails.length != 0 && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              SORT
            </button>
          )}
          {cartedProductDetails.length != 0 && (
            <div className="hidden lg:grid grid-cols-2 py-6">
              <div className="font-normal text-xl leading-8 text-gray-500">
                Product
              </div>
              <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                <span className="w-full max-w-[260px] text-center">
                  Quantity
                </span>
                <span className="w-full max-w-[200px] text-center">Total</span>
              </p>
            </div>
          )}

          {cartedProductDetails.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                {cartedProductDetails.map((item, index) => {
                  const perticularPrice =
                    parseFloat(item.price) * item.quantity;
                  return (
                    <>
                      <div
                        key={index}
                        className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
                      >
                        <div className="img-box">
                          <img
                            src={item.image}
                            height={100}
                            width={100}
                            alt="perfume bottle image"
                            className="xl:w-[140px] rounded-xl object-cover"
                          />
                        </div>
                        <div className="pro-data w-full max-w-sm ">
                          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                            {item.title}
                          </h5>

                          <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                            ${item.price}
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                        <div className="flex items-center w-full mx-auto justify-center">
                          <button
                            disabled={item.quantity <= 1}
                            onClick={() => handleRemoveQuantity(item.id)}
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          >
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <div className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => handleAddQuantity(item.id)}
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          >
                            <svg
                              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeOpacity="0.2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                          ${perticularPrice}
                        </h6>
                        <button onClick={()=>handleDelete(item.id)} className="cursor-pointer">
                          DELETE
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="title font-manrope flex justify-center items-center h-[350px] font-bold text-2xl leading-10 mb-8 text-center text-black">
              Cart is empty
            </div>
          )}

          {cartedProductDetails.length != 0 && (
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                  Total
                </p>
                <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                  ${totalPrice.toFixed(2)}
                </h6>
              </div>
            </div>
          )}

          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button
              onClick={() => navigate("/")}
              className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100"
            >
              <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                Continue Shopping
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Continue to Payment
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
