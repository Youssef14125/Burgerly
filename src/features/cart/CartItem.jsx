import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { burgerId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(burgerId));

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.2 }}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 text-ink sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold text-neon">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          burgerId={burgerId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem burgerId={burgerId} />
      </div>
    </motion.li>
  );
}

export default CartItem;
