import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import DropdownLink from '../DropdownLink';
import Cookies from 'js-cookie';
import { Store } from '@/utils/Store';
import { useContext } from 'react';

export default function Header({ cart, carItemsCount }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
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
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="text-blue-600">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 bg-white origin-top-right shadow-lg">
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/order-history">
                  Order History
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink
                  className="dropdown-link"
                  href="#"
                  onClick={logoutClickHandler}
                >
                  Logout
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link href="/login" className="p-2">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
