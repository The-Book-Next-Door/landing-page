import HeroContent from './HeroContent';
import HeroAnimation from './HeroAnimation';

const HeroSection = () => {
    return (
        <div className="mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-fit">
                {/* Left Content */}
                <HeroContent />

                {/* Right Animation */}
                <HeroAnimation />
            </div>
        </div>
    );
};

export default HeroSection;
