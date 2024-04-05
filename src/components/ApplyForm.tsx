import { useState } from "react";

const ApplyForm = () => {
  const [state, setState] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  function handlechange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full w-full">
      <div className="flex flex-col">
        <label className="text-white lg:text-lg">Name:</label>
        <input
          className="bg-meadow-300 text-white p-2 placeholder-white placeholder-opacity-50 rounded-lg"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={state.name}
          onChange={handlechange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white lg:text-lg">Surname:</label>
        <input
          className="bg-meadow-300 text-white p-2 placeholder-white placeholder-opacity-50 rounded-lg"
          name="surname"
          type="text"
          placeholder="Enter Surname"
          value={state.surname}
          onChange={handlechange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white lg:text-lg">Phone Number:</label>
        <input
          className="bg-meadow-300 text-white p-2 placeholder-white placeholder-opacity-50 rounded-lg"
          name="phone"
          type="tel"
          placeholder="Enter Phone"
          value={state.phone}
          onChange={handlechange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white lg:text-lg">Email:</label>
        <input
          className="bg-meadow-300 text-white p-2 placeholder-white placeholder-opacity-50 rounded-lg"
          name="email"
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={handlechange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white lg:text-lg">Message:</label>
        <textarea
          className="bg-meadow-300 text-white p-2 placeholder-white placeholder-opacity-50 rounded-lg"
          name="message"
          placeholder="Enter message"
          value={state.message}
          onChange={handlechange}
          required
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-cream text-lg mt-6 p-3 h-16 hover:bg-amber-500 hover:scale-105 transition-all rounded-lg" type="submit">
          Go To Payment
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
