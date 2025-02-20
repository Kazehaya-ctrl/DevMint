export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 w-full bg-white/30 backdrop-blur-md text-black h-20 px-8 left-0 right-0 shadow-lg">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-start gap-x-20">
        <div className="flex items-center gap-x-4">
          <div className="text-2xl text-gray-900 font-semibold text-center">Logo</div>
        </div>
        
        <div className="flex space-x-6 text-gray-900 text-md">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">About</a>
          <a href="#" className="hover:text-gray-600">Portfolio</a>
          <a href="#" className="hover:text-gray-600">Contact</a>
          <a href="#" className="hover:text-gray-600">FAQ</a>
        </div>
        <div className="ml-auto">
          <button className="bg-blue-600 p-3 rounded-lg">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
}
