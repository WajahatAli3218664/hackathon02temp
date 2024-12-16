"use client";

import { useAtom } from "jotai";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart } from "../addToCart";

const OrderSuccessPage = () => {
  const [addCart, setAddToCart] = useAtom(addToCart);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center overflow-x-hidden px-4">
      {/* Header Section */}
      <div className="w-full max-w-[800px] mb-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-[#2A254B] hover:underline">
            <FaArrowLeft className="text-base sm:text-lg" />
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2A254B]">
            Order Success
          </h1>
        </div>
      </div>

      {/* Success Message Section */}
      <div className="w-full max-w-[600px] bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-600 mb-4 text-center">
          Order Successfully Placed!
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
          Thank you for your purchase. Your order has been successfully placed and is being processed. You will receive an email with the order details shortly.
        </p>

        {/* Continue Shopping Button */}
        <div className="text-center">
          <Link href="/products">
            <button
              onClick={() => setAddToCart([])}
              className="w-full py-2 bg-[#2A254B] text-white font-semibold rounded-md hover:bg-[#F9F9F9] hover:text-[#2A254B] border border-[#2A254B] transition duration-200"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
