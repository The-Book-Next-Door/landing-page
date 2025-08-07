import { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-cream shadow-lg border-b border-taupe/20 z-50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation Links - Hidden on mobile */}
                    <div className="hidden md:block">
                        <NavLinks />
                    </div>

                    {/* Language Selector and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <LanguageSelector />
                        <MobileMenu 
                            isOpen={isMobileMenuOpen} 
                            setIsOpen={setIsMobileMenuOpen} 
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
