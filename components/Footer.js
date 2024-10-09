import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#92D8F1] text-gray-800 py-6">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold mb-4">BillTrim.</h4>
          <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://youtube.com">
              <FaYoutube size={30} />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedin size={30} />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter size={30} />
            </Link>
          </div>
        </div>

        <div className="flex space-x-12">
          <div className="flex flex-col">
            <h4 className="font-bold mb-4">Company</h4>
            <Link href="/why" className="mb-2">Why BillTrim?</Link>
            <Link href="/contact" className="mb-2">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold mb-4">Services</h4>
            <Link href="/personal" className="mb-2">Personal Finance</Link>
            <Link href="/business" className="mb-2">Business Solutions</Link>
            <Link href="/management">Management</Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold mb-4">Resources</h4>
            <Link href="/blog" className="mb-2">Blog</Link>
            <Link href="/webinars" className="mb-2">Webinars</Link>
            <Link href="/casestudies">Case Studies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
