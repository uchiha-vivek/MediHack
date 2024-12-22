import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-80">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Join Room</h1>
        <div className="space-y-4">
          <input
            placeholder="Name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            className="block"
          >
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
