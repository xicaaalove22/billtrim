import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children, showNavbar = true, showFooter = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Conditionally render Footer */}
      {showFooter && <Footer />}
    </div>
  );
}
