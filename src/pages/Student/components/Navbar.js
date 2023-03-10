import React from 'react'
import { Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <header className=" border-b-[0.1px] border-gray-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={"/student/home"} className="bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text no-underline hover:no-underline font-bold lg:text-4xl">
      <span className="ml-3 text-3xl">StudyAI</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5 text-base justify-center">
      <Link to={'/home'} className="mr-5 hover:text-gray-800">Home</Link>
      <Link to={'/download'} className="mr-5 hover:text-gray-800">Download Extention</Link>
    </nav>
    <button className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 " onClick={()=> {}}>
    Logout
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar