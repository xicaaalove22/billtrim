import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Explore More', href: '/explore' },
  ];

  return (
    <nav className="flex space-x-6 border-b px-5 h-14 items-center justify-between bg-white shadow-md">
      <Link href="/" className="ml-8 flex items-center">
        <Image src="/logo/logo.svg" alt="BillTrim Logo" width={120} height={50} />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-gray-800 hover:text-blue-500">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="flex">
        <Link href="/signup" className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-700 mr-4">
          Sign up
        </Link>
        <Link href="/login" className="flex items-center px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:bg-blue-600">
          Log in
          <FaArrowRightFromBracket className="ml-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
