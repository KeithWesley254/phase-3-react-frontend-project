import React from 'react'
import image from '../../src/Wesleygood.jpg'

const AboutPage = () => {
  return (
    <div>
      <section className="amTheCaptainNow">
        <div className="myStory">
            <div className="myImg">
                <img src={image} alt="My Picture" />
            </div>
            <div className="aboutText">
                <h2 id="aboutMe">About Me</h2>
                <h5>Software Engineer <span>& Gamer</span></h5>
                <p>My Name is Keith Wesley, and I decided to change my occupation from Procurement
                    to Software Engineering. I have been passionate about Technology since I was a child and 
                    the endless possibilities it presents. Web Development and Content Creation have given me a platform to
                    express my creativity and critical thinking.
                    <br />
                    Security is a major priority to me as well which has led me to exploring the field of
                    Cyber Security. I am looking forward to becoming a Guru in this field for I believe
                    privacy of data should be of utmost importance.
                </p>
                <a id="contactMe" href="mailto: keithwesley187@gmail.com" target="_blank">Let's Talk</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default AboutPage