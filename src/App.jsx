import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="flex flex-col custom-background text-gray-400 min-h-screen  justify-around p-4">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-6xl font-bold">Hello Beer</h1>
        <h2 className="text-2xl">A simple API to discover new breweries</h2>
      </div>
      <div className=" text-center space-y-4">
        <h1 className="text-4xl font-semibold">Find Random Brewery</h1>
        <button className="bg-orange-700 bg-opacity-200 hover:bg-opacity-80 rounded-lg p-4">
          Get Random
        </button>
      </div>
      <div>
        <form className="flex  flex-col gap-2  p-4 rounded-lg text-center font-bold">
          <h3 className="text-2xl">Contact Us:</h3>
          <input
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            className="p-2 rounded-xl text-black font-bold"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            className="p-2 rounded-xl text-black font-bold"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Phone"
            id="tel"
            name="tel"
            value={phone}
            className="p-2 rounded-xl text-black font-bold"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={message}
            className="p-2 rounded-xl text-black font-bold"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="bg-orange-700 bg-opacity-200 hover:bg-opacity-80 rounded-lg p-4">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
