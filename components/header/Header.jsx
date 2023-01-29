import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header({ cart, carItemsCount }) {
  const { status, data: session } = useSession();

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
          {carItemsCount > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {carItemsCount}
            </span>
          )}
        </Link>
        {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          session.user.name
        ) : (
          <Link href="/login" className="p-2">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
