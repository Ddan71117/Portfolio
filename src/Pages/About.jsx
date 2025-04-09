import profilePicture from '../assets/profilePicture.jpg';

function About() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-row justify-center items-center mt-20 gap-6 p-3">
          <img src={profilePicture} alt="Profile picture" className="rounded-full w-[18%]" />
          <div className="text-center w-1/2 mt-4">
            <p>
               Hello! I am a Junior Full-stack Web Developer who has recently completed an EdX coding
               bootcamp and am ready to explore a career in web development. Currenty I am a stay-at-home 
               parent and when I am not spending time with family I find my self tinkering on my motorcycle, 
               constructing terrariums, playing video games and tabletop roleplaying games.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About