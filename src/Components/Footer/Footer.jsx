const Footer = () => {
    return (
   
        <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 px-6">
        
        {/* Logo and Site Description */}
        <div className="text-center md:text-left md:w-1/3">
          <h2 className="text-3xl font-bold text-yellow-400">RecipeApp</h2>
          <p className="text-gray-400 mt-2">Discover, cook, and share recipes from around the world. Bringing the joy of cooking to your home!</p>
        </div>

        {/* Navigation Links */}
        <div className="md:w-1/3 flex justify-center space-x-8 md:space-x-4 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">Quick Links</h3>
            <a href="#about" className="block text-gray-400 hover:text-yellow-300">About Us</a>
            <a href="#recipes" className="block text-gray-400 hover:text-yellow-300">Recipes</a>
            <a href="#contact" className="block text-gray-400 hover:text-yellow-300">Contact</a>
            <a href="#faq" className="block text-gray-400 hover:text-yellow-300">FAQ</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/3 flex justify-center md:justify-end space-x-6 text-2xl text-yellow-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-300">
            &#x1F426; {/* Bird icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-300">
            &#x1F426; {/* Bird icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-300">
            &#x1F4F7; {/* Camera icon */}
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} RecipeApp. All rights reserved.
      </div>
  
       
      </footer>
    );
  };
  
  export default Footer;
  