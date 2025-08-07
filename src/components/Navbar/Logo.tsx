import LogoImage from "../../assets/logo.jpeg"

const Logo = () => {
    return (
        <div className="flex items-center">
            <img 
                src={LogoImage} 
                alt="The Book Next Door" 
                className="h-12 w-12 rounded-full object-cover"
            />
        </div>
    );
};

export default Logo;
