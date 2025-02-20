export default function Navbar() {
  
  return (
    <nav className="border-b-2 fixed top-0 z-10 w-full bg-black/50 backdrop-blur-md text-black h-20 px-8 left-0 right-0 border-double border-b-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-start gap-x-20">
        <div className="flex items-center gap-x-4 -translate-x-20 hover:scale-105 transition">
          <div className="backdrop-blur-md rounded-2xl">
            <img src="./cube.png" width={50} alt="" />
          </div>
          
          <div className="text-xl text-white font-semibold text-center">Devmint</div>
        </div>
        
        <div className="flex space-x-6 text-white text-md ">
          <a href="#" className="hover:text-gray-500 transition hover:scale-105">Home</a>
          <a href="#" className="hover:text-gray-500 transition hover:scale-105">About</a>
          <a href="#" className="hover:text-gray-500 transition hover:scale-105">Portfolio</a>
          <a href="#" className="hover:text-gray-500 transition hover:scale-105">Contact</a>
          <a href="#" className="hover:text-gray-500 transition hover:scale-105">FAQ</a>
        </div>
        <div className="ml-auto">
          <button className="bg-blue-600 transition hover:scale-105 backdrop-blur-md text-white p-3 rounded-lg">
            Get in Touch

          </button>
        </div>
      </div>
    </nav>
  );
}