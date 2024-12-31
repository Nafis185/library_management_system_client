import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex col lg:flex-row ">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl  border-8 border-white border-shadow" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold">New movie is released!</h2>
            <p className="py-6">Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;