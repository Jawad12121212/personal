import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qa5l848",
        "template_mc77wfg",
        formData,
        "IuxKPg6TqmmCo9z_F"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div id="Contact" className="lg:h-[90vh] md:h-[80vw] w-full flex justify-center items-center px-[5vw]">
      <div className="lg:h-[80vh] lg:w-[40%] md:h-[70vw] md:w-[70%] max-md:h-[80vh] sm:w-[80%] max-sm:w-full mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col justify-evenly items-center">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        {status && <p className="text-green-500">{status}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 lg:h-[50vh] md:h-[40vw] max-md:h-[50vh] flex flex-col justify-center gap-[1vw] w-full">
          <label className="flex flex-col">
            <span>Full Name</span>
            <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          </label>
          <label className="flex flex-col">
            <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          </label>
          <label className="flex flex-col">
            <span>Message</span>
          <textarea
            name="message"
            placeholder="I wanna hire you..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;