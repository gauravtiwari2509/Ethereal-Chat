
const Footer = () => {
    return (
      <footer className="z-50  flex justify-center items-center lg:fixed lg:bottom-0 w-screen">
        <div className="flex justify-center items-center">
          <p className="text-gray-600 lg:text-lg md:text-base text-xs">© 2024 EtherealGift. All rights reserved.</p>
          <div className="ml-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/gaurav-tiwari-121a77258/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-logo.png" alt="LinkedIn" className="lg:h-5 lg:w-5 h-3 w-3 md:h-4 md:w-4" />
            </a>
            <a href="https://github.com/gauravtiwari2509/" target="_blank" rel="noopener noreferrer">
              <img src="/github-logo.svg" alt="GitHub" className="lg:h-5 lg:w-5 h-3 w-3 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  