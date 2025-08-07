import HeroSection from './HeroSection';
import ComingSoon from './ComingSoon';

const HomeSection = () => {
    return (
        <section id="home" className="min-h-screen bg-[#f5f1eb] pt-18 pb-16">
            <HeroSection />
            <ComingSoon />
        </section>
    );
};

export default HomeSection;
