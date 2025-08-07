const NavLinks = () => {
    const sections = [
        { id: 'home', title: 'Home' },
        { id: 'story', title: 'Our Story' },
        { id: 'how-it-works', title: 'How It Works' },
        { id: 'why-it-matters', title: 'Our Mission' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex items-center space-x-8">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="px-4 py-2 text-base font-semibold text-gray-700 hover:text-gray-900 transition-all duration-200 relative group"
                >
                    {section.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
                </button>
            ))}
        </div>
    );
};

export default NavLinks;
