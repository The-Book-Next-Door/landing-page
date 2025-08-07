import Lottie from "lottie-react";
import animationData from "../../assets/animation/woman-reading-book-under-the-tree.json";

const HeroAnimation = () => {
  return (
    <div className="relative">
      {/* Lottie Animation */}
      <div className="aspect-[4/3] flex items-center justify-center">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-full max-w-md"
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
