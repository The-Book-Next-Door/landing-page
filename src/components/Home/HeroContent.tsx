const HeroContent = () => {
    const scrollToNextSection = () => {
        const element = document.getElementById('story');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                    Find Your Book People
                </h1>
                <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-lg">
                    Connect with fellow book lovers in your neighborhood. Share stories, swap favorites, and 
                    build a community around the books you love.
                </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                    onClick={scrollToNextSection}
                    className="bg-green-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-all duration-200 flex items-center justify-center gap-2"
                >
                    Join the Community
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <button 
                    onClick={scrollToNextSection}
                    className="border-2 border-stone-400 text-stone-700 px-8 py-4 rounded-full font-semibold hover:bg-stone-400 hover:text-white transition-all duration-200"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HeroContent;
