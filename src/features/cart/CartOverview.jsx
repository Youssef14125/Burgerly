import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between border-t border-line bg-surface px-4 py-4 text-sm text-ink sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold sm:space-x-6">
        <span className="text-neon">{totalCartQuantity} burgers</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="font-semibold text-pink hover:text-neon">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
