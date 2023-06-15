import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="flex flex-col custom-background text-gray-200 min-h-screen p-20 justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-8xl font-bold">Hello Beer</h1>
        <h2 className="text-2xl">A simple API to discover new breweries</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 text-4xl p-4 rounded-lg text-center font-bold">
          <h3 className="">Contact Us:</h3>
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
          <button className="bg-orange-700 bg-opacity-50 hover:bg-opacity-80">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
