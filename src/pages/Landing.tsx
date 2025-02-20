import List from '../components/List'
import AnimatedCubes from '../components/Cubes'

export default function Landing() {
    return (
        <main className="md:px-16 w-full py-40 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 space-y-6 pl-4 -translate-x-40">

              <div className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mr-9 rounded-lg w-fit">
                <div className="bg-blue-600 text-xs text-white font-bold px-3 py-1 rounded-md">
                  NEW
                </div>
                <div className="bg-opacity-20 text-xs px-3 py-1 text-white rounded-r-md">
                  Innovation Solution
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6.5xl text-left text-white font-bold leading-tight">
                    Powering Your Creative Dreams Welcome to <br />
                    <span className="inline-block overflow-hidden text-blue-600 whitespace-nowrap animate-typing w-[4.4em]">
                        DEVMINT.
                    </span>
                </h1>
              
              <p className="text-gray-400 text-left max-w-md">
              From Software Development to Design Services, we deliver tailored solutions for every visionary idea using cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
                <button className="bg-white text-black px-6 py-3 text-sm rounded-lg hover:bg-gray-200 transition">
                  Explore Work
                </button>
                <button className="bg-opacity-10 bg-white/30 text-white backdrop:blur-md text-sm px-6 py-3 rounded-lg hover:bg-opacity-20 transition">
                  What is Devmint?
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
