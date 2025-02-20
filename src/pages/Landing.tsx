import List from '../components/List'
import AnimatedCubes from '../components/Cubes'

export default function Landing() {
    return (
        <section className="h-[90vh] w-full flex flex-col md:flex-row items-center justify-between bg-[#000000] bg-[linear-gradient(to_right,#ffffff15_2px,transparent_2px),linear-gradient(to_bottom,#ffffff15_2px,transparent_2px)] [background-size:30px_30px]">
            <div className="md:w-1/2 space-y-6 pl-4 items-center translate-x-64">

              <div className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mr-9 rounded-lg w-fit">
                <div className="bg-blue-600 text-xs text-white font-bold px-3 py-1 rounded-md">
                  NEW
                </div>
                <div className="bg-opacity-20 text-xs px-3 py-1 text-white rounded-r-md">
                  Innovation Solution
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6.5xl  text-white font-bold leading-tight">
                    Powering Your Creative <br /> Dreams, Embrace <br />
                    <span className="inline-block overflow-hidden text-blue-600 whitespace-nowrap animate-typing w-[4.4em]">
                        DEVMINT.
                    </span>
                </h1>
              
              <p className="text-gray-400 text-left max-w-md">
              From Software Development to Design Services, we deliver tailored solutions for every visionary idea using cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
                <button className="bg-white text-black px-6 py-3 text-sm rounded-lg hover:bg-gray-200 hover:scale-105 transition">
                  Explore Work
                </button>
                <button className=" bg-white/30 text-white backdrop-blur-md text-sm px-6 py-3 rounded-lg hover:bg-opacity-20 hover:scale-105 transition">
                  What is Devmint?
                </button>
              </div>
              
              <div className="pt-16 flex space-x-6 mr-28 items-center">
                <List />
              </div>
            </div>
            
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
                <AnimatedCubes />
            </div>
          </section>
    )
}
