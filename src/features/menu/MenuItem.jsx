import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ burger }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = burger;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      burgerId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 border border-line bg-surface p-3 transition-colors duration-200 hover:border-neon/50 sm:p-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 shrink-0 rounded border border-line object-cover ${
          soldOut ? 'opacity-40 grayscale' : ''
        }`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-display text-xl tracking-wide text-ink">{name}</p>
        <p className="text-sm italic text-muted">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          {!soldOut ? (
            <p className="font-sans text-sm font-semibold text-neon">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase tracking-wide text-muted">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                burgerId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem burgerId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
