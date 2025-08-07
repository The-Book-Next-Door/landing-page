const MobileMenu = () => {
    const sections = [
        { id: 'home', title: 'Home' },
        { id: 'story', title: 'The Story Behind' },
        { id: 'how-it-works', title: 'How It Works' },
        { id: 'why-it-matters', title: 'Why It Matters' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Navigation - Hidden for now */}
            <div className="md:hidden mt-4 pb-4 border-t pt-4 hidden">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {section.title}
                    </button>
                ))}
            </div>
        </>
    );
};

export default MobileMenu;
