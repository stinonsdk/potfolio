import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";

const Welcomepage = () => {

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-3xl lg:text-5xl text-center tracking-wide">
      Tech Hub For Advanced software, 
      <span className="bg-gradient-to-r from-green-500 to-blue-800 text-transparent bg-clip-text">
          research for advanced people
      </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 wax-w-4xl">
          Unlocking Digital Creativity: Your Ultimate Destination for Web Design Wonders! 
          Join us on a journey where pixels meet perfection. 
          Dive into the art and science of web design with expert tutorials
      </p>
      
      <div className="flex justify-center my-10">
          <a href="#"
          className="bg-gradient-to-r from-blue-500 to-green-800 py-3 px-4 mx-3 rounded-md"
          >
            Get started
          </a>
          <a href="#"
          className="py-3 px-4 mx-3 rounded-md border"
          >
            Demonstration
          </a>

      </div>

              <div className="flex mt-10 justify-center">
          <video 
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
           
          >
            <source src={v3} type="video/mp4"/>
          </video>

          <video 
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
           
          >
            <source src={v4} type="video/mp4"/>
          </video>

        </div>
    </div>
  )
}

export default Welcomepage
