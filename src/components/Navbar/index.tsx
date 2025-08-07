import Logo from './Logo';
import NavLinks from './NavLinks';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation Links */}
                    <NavLinks />

                    {/* Language Selector and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <LanguageSelector />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
