import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-black">
        Your Cart Is Empty
      </h1>

      <p className="text-slate-400 mt-4 text-lg">
        Looks like you haven’t
        added anything yet.
      </p>

      <Link to="/shop">
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all px-8 py-4 rounded-2xl text-lg font-bold">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-5xl font-black mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-3xl p-5 flex gap-6 items-center"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-32 h-32 object-contain bg-slate-950 rounded-2xl p-4"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-slate-400 mt-2">
                  ${item.price}
                </p>

                {/* QUANTITY */}
                <div className="flex items-center gap-4 mt-5">
                  <button
                    onClick={() =>
                      decreaseQty(
                        item.id
                      )
                    }
                    className="bg-slate-800 px-4 py-2 rounded-xl"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(
                        item.id
                      )
                    }
                    className="bg-slate-800 px-4 py-2 rounded-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                onClick={() =>
                  removeFromCart(
                    item.id
                  )
                }
                className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-slate-900 rounded-3xl p-8 h-fit sticky top-28">
          <h2 className="text-3xl font-black mb-8">
            Order Summary
          </h2>

          <div className="flex justify-between text-xl mb-6">
            <span>Total</span>

            <span className="font-black text-green-400">
              ${totalPrice.toFixed(
                2
              )}
            </span>
          </div>

          <Link to="/checkout">
           <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-2xl text-lg font-bold">
             Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;