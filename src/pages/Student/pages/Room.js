import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

function Room() {

    const navigate = useNavigate()
    const handleQuiz = () => {
        navigate(`/quiz/123`);
      };
  const lectureSummary = {
    title: "Introduction to React",
    duration: "1 hour",
    instructor: "John Doe",
    description:
      "Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state.Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state. Learn the basics of React, including components, props, and state.Learn the basics of React, including components, props, and state.Learn the basics of React, including components, props, and state.",
  };

  let attentiveness = 90;

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-300 to-white min-h-screen">
        <Navbar />
        <div className="px-[20rem]">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div className="w-1/2">
                <h1 className="text-3xl font-bold">{lectureSummary.title}</h1>
                <p className="text-gray-700 mt-2">
                  {lectureSummary.duration} | {lectureSummary.instructor}
                </p>
                <p className="text-gray-700 mt-4">
                  {lectureSummary.description}
                </p>
              </div>

              <div className="flex flex-col items-start justify-end gap-4">
                <div className="flex items-center mt-4">
                  <span className="pr-4">Attentiveness </span>
                  <div className="w-32 h-3 rounded-lg overflow-hidden bg-gray-300">
                    <div
                      className={`h-full rounded-lg ${
                        attentiveness >= 80
                          ? "bg-green-400"
                          : attentiveness >= 60
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                      style={{ width: `${attentiveness}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 ml-4">
                    {attentiveness}%
                  </div>
                </div>

                <div>
                  <span>Your Score - 00</span>
                </div>
                <div>
                  <button 
                  onClick={handleQuiz}
                   className=" inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Take a Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
