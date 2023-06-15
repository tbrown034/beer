import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="flex flex-col custom-background text-gray-300 min-h-screen  justify-around p-4">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-6xl sm:text-9xl font-bold">Hello Beer</h1>
        <h2 className="text-xl text-center font-mono  font-bold sm:text-4xl ">
          A simple API to discover new breweries
        </h2>
      </div>
      <div className=" text-center space-y-4">
        <h1 className="text-4xl  sm:text-7xl font-semibold">Get a Brewery</h1>
        <button className="bg-yellow-700 bg-opacity-100 hover:bg-opacity-50 rounded-lg p-4 sm:text-5xl text-2xl">
          Get Random
        </button>
      </div>
      <div>
        <form className="flex  flex-col gap-2  p-4 rounded-lg sm:gap-8 sm:px-8 font-bold sm:items-center sm:text-xl">
          <h3 className="text-2xl sm:text-6xl">Contact Us:</h3>
          <input
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            className="p-2 rounded-xl text-black font-bold sm:w-1/2 w-5/6 opacity-75"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            className="p-2 rounded-xl text-black font-bold w-5/6 opacity-75 sm:w-1/2"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Phone"
            id="tel"
            name="tel"
            value={phone}
            className="p-2 rounded-xl text-black font-bold w-5/6 opacity-75 sm:w-1/2"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={message}
            className="p-2 rounded-xl text-black font-bold w-5/6 opacity-75 sm:w-1/2"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="bg-yellow-700 bg-opacity-100 hover:bg-opacity-50 rounded-lg p-4 sm:text-5xl text-2xl">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
