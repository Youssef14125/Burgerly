import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-line bg-surface px-4 py-3 sm:px-6">
      <Link
        to="/"
        className="font-display text-2xl tracking-wider text-neon text-glow"
      >
        Burgerly
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/orders"
          className="hidden text-sm font-medium text-muted hover:text-neon sm:block"
        >
          My orders
        </Link>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
