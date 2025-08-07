interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    const sections = [
        { id: 'home', title: 'Home' },
        { id: 'story', title: 'Our Story' },
        { id: 'how-it-works', title: 'How It Works' },
        { id: 'why-it-matters', title: 'Our Mission' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile menu button */}
            <button 
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
            >
                {isOpen ? (
                    // Close icon (X)
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-cream border-t border-taupe/20 shadow-lg transition-all duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="px-6 py-4 space-y-2">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="block w-full text-left px-4 py-3 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all duration-200"
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
