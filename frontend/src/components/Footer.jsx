const Footer = () => {
    return (
      <footer className="bg-gray-600 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/student-login" className="text-gray-400 hover:text-white">Student Login</a></li>
              <li><a href="/faculty-login" className="text-gray-400 hover:text-white">Faculty Login</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white">Help</a></li>
            </ul>
          </div>
  
          {/* Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Download</h3>
            <ul className="space-y-2">
              <li><a href="/pms(1).pdf" className="text-gray-400 hover:text-white" download>Causmic club form</a></li>
              <li><a href="/pms(1).pdf" className="text-gray-400 hover:text-white" download>Data science club form</a></li>
              <li><a href="/guidelines.pdf" className="text-gray-400 hover:text-white" download>Guidelines</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: gndec@college.edu</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: GNDEC College, Ludhiana, 141013, India,</p>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  
  
  
  
  
  
  
  
  
  
  
  