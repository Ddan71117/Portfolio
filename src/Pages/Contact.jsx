import { useState } from "react";
import emailjs from "@emailjs/browser";
import githubIcon from "/assets/github_icon.png";
import linkedinIcon from "/assets/linkedin_icon.png";


function Contact() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submission, setSubmission] = useState("");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleGHClick = () => {
    window.open("https://github.com/Ddan71117");
  }

  const handleLIClick = () => {
    window.open("https://www.linkedin.com/in/daniel-drennen-910b37350/");
  }

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
            className="w-1/4 text-center px-4 py-2 border border-verdegris rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
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
            className="w-1/4 text-center px-4 py-2 border border-verdegris rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
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
            className="w-1/4 px-4 py-2 border border-verdegris rounded-lg focus:outline-none focus:ring-2 focus:ring-yinmnBlue"
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
      <div className="flex justify-center mt-10">
        <button
          onClick={handleGHClick}
          onMouseEnter={() => setHoveredButton('github')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`p-5 transform transition-transform duration-300 ${hoveredButton === 'github' ? "scale-110" : "scale-90"}`}
          >
          <img src={githubIcon} alt="GitHub" className="w-12 h-12 m-4" />
        </button>
        <button
          onClick={handleLIClick}
          onMouseEnter={() => setHoveredButton('linkedIn')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`p-5 transform transition-transform duration-300 ${hoveredButton === 'linkedIn' ? "scale-110" : "scale-90"}`}
          >
          <img src={linkedinIcon} alt="Linked in" className="w-12 h-12 m-4" />
        </button>
      </div>
    </>
  )
}


export default Contact