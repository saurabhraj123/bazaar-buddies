import Link from 'next/link';

export default function Header() {
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
        <Link href="/login" className="p-2">
          Login/Register
        </Link>

        <Link href="/cart" className="p-2">
          Cart
        </Link>
      </div>
    </nav>
  );
}
