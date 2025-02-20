import List from '../components/List'
import AnimatedCubes from '../components/Cubes'

export default function Landing() {
    return (
    <main className="px-8 md:px-16 py-40 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 ml-8 space-y-6">

          <div className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mr-9 rounded-lg w-fit">
            <div className="bg-blue-600 text-xs text-white font-bold px-3 py-1 rounded-md">
              NEW
            </div>
            <div className="bg-opacity-20 text-xs px-3 py-1 rounded-r-md">
              No. 1 Studio of 2025
            </div>
          </div>
          
            <h1 className="text-5xl md:text-6.5xl text-left text-white font-bold leading-tight">
                Premium Agency for <br/>Creatives.
            </h1>
          
          <p className="text-gray-400 text-left max-w-md">
            We specialize in crafting unique digital presence
            that help businesses grow and stand out in their industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
            <button className="bg-white text-black px-6 py-3 text-sm rounded-lg hover:bg-gray-200 transition">
              Connect With Us
            </button>
            <button className="bg-opacity-10 bg-white/30 text-white backdrop:blur-md text-sm px-6 py-3 rounded-lg hover:bg-opacity-20 transition">
              What is Landin?
            </button>
          </div>
          
          <div className="pt-16 flex space-x-6 mr-28 items-center">
            <List />
          </div>
        </div>
        
        <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center items-center relative translate-x-40 ">
    <AnimatedCubes />
</div>
      </main>
    )
}
