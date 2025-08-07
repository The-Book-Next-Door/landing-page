const NavLinks = () => {
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
        <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    {section.title}
                </button>
            ))}
        </div>
    );
};

export default NavLinks;
