import { useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submission, setSubmission] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !fullName || !email || !message
    ? (setError("All fields are required."), setSubmission(""))
    : (
      setError(""),
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_KEY
      ),
      setSubmission("Your information has been submitted."),
      setName(""),
      setEmail(""),
      setMessage("")
      );
  };

  return (
    <>
      <form className="text-center mt-40" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 mt-8">
            Name
            </label>
          <input
            className="w-1/4 text-center px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
            name="name"
            type="text"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Email Address
          </label>
          <input
            className="w-1/4 text-center px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Message
          </label>
          <textarea
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
            name="message"
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="text-center m-4 px-6 py-2 bg-yinmnBlue text-white rounded-lg border-2 border-transparent hover:bg-verdegris hover:border-2 hover:border-yinmnBlue hover:text-spaceCadet focus:outline-none focus:ring-2 focus:ring-yinmnBlue" type="submit">Submit</button>
      </form>
      {error && (
        <div>
          <p className="text-red-500 mt-2 text-center">{error}</p>
        </div>
      )}
      {submission && (
        <div>
          <p className="text-oxfordBlue mt-2 text-center">{submission}</p>
        </div>
      )}
    </>
  )
}


export default Contact