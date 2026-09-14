// Test ID: IIDSAT
import { useFetcher, useLoaderData } from 'react-router-dom';

import OrderItem from './OrderItem';

import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher]
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-2xl tracking-wide text-ink">
          Order #{id} status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full border border-pink px-3 py-1 text-sm font-semibold uppercase tracking-wide text-pink">
              Priority
            </span>
          )}
          <span className="rounded-full border border-neon px-3 py-1 text-sm font-semibold uppercase tracking-wide text-neon">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border border-line bg-surface px-6 py-5">
        <p className="font-medium text-ink">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-muted">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-line border-b border-t border-line">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.burgerId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.burgerId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 border border-line bg-surface px-6 py-5">
        <p className="text-sm font-medium text-muted">
          Price burger: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-muted">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold text-ink">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
