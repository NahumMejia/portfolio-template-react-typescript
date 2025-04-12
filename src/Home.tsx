import './App.css';
import Navbar from '@/Components/Navbar';
import imgProfile from '@/assets/your-photo.jpg';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { IoMdArrowDown } from "react-icons/io";
import { Separator } from './Components/Separator';
import Button from './Components/button';

function App() {
  return (
    <>
      <div className="bg-slate-950 pt-20 min-h-screen">
        <Navbar />
        {/* Section of presentation */}
        <div className="flex flex-row justify-center items-center gap-x-20 mx-auto px-10 pt-12 max-w-screen-xl">
          {/* Profile image with border */}
          <div className="relative w-96 h-96">
            <div className="absolute -inset-3 border-4 border-blue-900 rounded-full"/>
            <img
              className="relative shadow-xl rounded-full w-full h-full object-cover"
              src={imgProfile}
              alt="Nahum Mejía"
            />
          </div>
          {/* Text subsection */}
          <div className="w-[30rem] text-white text-left">
            <h1 className="mb-2 font-mono text-xl">Hi 👋, I am</h1>
            <h1 className="mb-4 font-passion font-bold text-5xl leading-tight">
              Nahum Mejia Doniz
            </h1>
            <span className="block mt-2 font-mono text-blue-100 text-lg typewriter">
              Software Engineer - FullStack Web Developer
            </span>
            {/* Divider line */}
            <Separator className='mt-5'/>
            <div className="flex gap-6 mt-6 text-white text-2xl">
              <a
                href="https://github.com/NahumMejia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/nahum_mejiaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/nahúm-mejia-doniz-262a042b8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
            <Button className="flex justify-center items-center hover:shadow-[0_0_15px_2px_#1e3a8a] mt-6 border-2 border-blue-900 rounded-sm w-[250px] h-10 font-bold text-blue-100 transition-all duration-300">
                Who I Am
              <IoMdArrowDown className="mt-1 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
