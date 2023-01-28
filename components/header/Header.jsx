import Link from 'next/link';

export default function Header({ cart }) {
  return (
    <nav className="flex justify-between h-12 items-center px-10 shadow-md">
      <Link href="/" className="text-lg font-bold">
        Bazaar Buddies
      </Link>

      {/* <div className="input-area">
        <input type="text" placeholder="Search" />
        <button className="btn">Search</button>
      </div> */}

      <div>
        <Link href="/cart" className="p-2">
          Cart
          {cart.cartItems.length > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {cart.cartItems.reduce((a, c) => a + Number(c.quantity), 0)}
            </span>
          )}
        </Link>

        <Link href="/login" className="p-2">
          Login/Register
        </Link>
      </div>
    </nav>
  );
}
