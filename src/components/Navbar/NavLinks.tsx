const sections = [
  { id: 'home', title: 'Home' },
  { id: 'story', title: 'Our Story' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'why-it-matters', title: 'Our Mission' }
];

const NavLinks = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center space-x-6">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="relative px-3 py-2 text-white font-extrabold transition-all duration-200 hover:bg-white hover:text-olive rounded-md focus:outline-none focus:ring-2 focus:ring-olive"
            >
              {title}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 transform transition-transform duration-200 origin-left group-hover:scale-x-100"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
