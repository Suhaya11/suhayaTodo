const About = () => {
  return (
    <div className="aboutWrapper">
      <h2>About Me</h2>
      <img
        src="src/assets/IMG_20240426_105342_620.jpg"
        alt="my picture"
        width={"200px"}
        height={"auto"}
      />
      <h2 className="maname">Sulaiman Haladu Yau</h2>
      <h3 className="mystatus">A passionate learner and aspiring developer.</h3>
      <p className="aboutMe">
        Hello! I'm Sulaiman Haladu Yau, a dedicated individual with a strong
        passion for learning and growth. I thrive on challenges and am
        constantly seeking opportunities to expand my knowledge and skills. My
        journey is fueled by curiosity and a desire to make a positive impact in
        the world around me.
      </p>
      <div className="contactMe">
        <p className="contactInfo">Feel free to reach out to me </p>
        <ul>
          <li> Email:suhaya1082@gmil.com</li>
          <li>Phone:+2347032631082</li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/Suhaya11" target={"_blank"}>
              {" "}
              Suhaya11{" "}
            </a>{" "}
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/sulaiman-haladu-7b2695377">
              Sulaiman haladu yau
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
