import { useLoaderData, Link } from "react-router-dom";
import { getAllOrders } from "../../services/apiRestaurant";
import { formatCurrency, formatDate } from "../../utils/helpers";

function OrderHistory() {
  const orders = useLoaderData();

  if (!orders.length) {
    return (
      <div className="px-4 py-6">
        <p className="text-muted">No orders yet.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-6 font-display text-3xl tracking-wide text-ink">
        Your orders
      </h2>
      <ul className="divide-y divide-line border-b border-t border-line">
        {orders.map((order) => (
          <li key={order.id} className="py-4">
            <Link
              to={`/order/${order.id}`}
              className="flex items-center justify-between text-ink hover:text-neon"
            >
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-muted">
                  {formatDate(order.createdAt)}
                </p>
              </div>
              <p className="font-bold text-neon">
                {formatCurrency(order.orderPrice + order.priorityPrice)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  return await getAllOrders();
}

export default OrderHistory;
