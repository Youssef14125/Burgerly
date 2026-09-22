import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
    toast("Cart cleared");
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-display text-3xl tracking-wide text-ink">
        Your cart, {username}
      </h2>

      <ul className="mt-3 divide-y divide-line border-b border-line">
        <AnimatePresence>
          {cart.map((item) => (
            <CartItem item={item} key={item.burgerId} />
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order burgers
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
