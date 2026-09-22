import burgers from "../data/burgers.json";

const ORDERS_KEY = "fastReactBurger_orders";

function readOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
  } catch {
    return {};
  }
}

function writeOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateOrderId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function getMenu() {
  await delay();
  return burgers;
}

export async function getOrder(id) {
  await delay();
  const orders = readOrders();
  const order = orders[id];
  if (!order) throw Error(`Couldn't find order #${id}`);
  return order;
}

export async function getAllOrders() {
  await delay();
  const orders = readOrders();
  return Object.values(orders).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

export async function createOrder(newOrder) {
  await delay();

  const orderPrice = newOrder.cart.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );
  const priorityPrice = newOrder.priority ? orderPrice * 0.2 : 0;

  const order = {
    ...newOrder,
    id: generateOrderId(),
    status: "preparing",
    priorityPrice,
    orderPrice,
    createdAt: new Date().toISOString(),
    estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
  };

  const orders = readOrders();
  orders[order.id] = order;
  writeOrders(orders);

  return order;
}

export async function updateOrder(id, updateObj) {
  await delay();

  const orders = readOrders();
  if (!orders[id]) throw Error("Failed updating your order");

  orders[id] = { ...orders[id], ...updateObj };
  writeOrders(orders);
}
