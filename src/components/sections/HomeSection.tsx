const HomeSection = () => {
    const scrollToNextSection = () => {
        const element = document.getElementById('story');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen bg-cream pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-accent leading-tight">
                                Find Your Book People
                            </h1>
                            <p className="text-lg md:text-xl text-taupe leading-relaxed max-w-lg">
                                Connect with fellow book lovers in your neighborhood. Share stories, swap favorites, and 
                                build a community around the books you love.
                            </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={scrollToNextSection}
                                className="bg-olive text-white px-8 py-4 rounded-full font-semibold hover:bg-olive/90 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Join the Community
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button 
                                onClick={scrollToNextSection}
                                className="border-2 border-taupe text-taupe px-8 py-4 rounded-full font-semibold hover:bg-taupe hover:text-white transition-all duration-200"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Placeholder for book stack image */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-olive/20 to-taupe/30 flex items-center justify-center">
                                <div className="text-center space-y-4 p-8">
                                    <div className="text-6xl">📚</div>
                                    <p className="text-taupe font-medium">Beautiful book stack image would go here</p>
                                    <p className="text-sm text-taupe/70">Books with plant aesthetic</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-olive/10 rounded-full blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-taupe/10 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Section */}
            <div className="mt-24 pt-16 border-t border-taupe/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-taupe mb-8 tracking-wide">
                        COMING SOON...
                    </h2>
                    <div className="flex items-center justify-center gap-3 text-lg text-dark-accent">
                        <span className="text-2xl">🌱</span>
                        <span className="font-semibold">Plant a Tree Program:</span>
                        <span className="text-taupe">For every book swap, we'll plant a tree in your community</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
