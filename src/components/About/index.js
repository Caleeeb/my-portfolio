import React from 'react';
import myPhoto from '../../images/CalebDay1.jpeg';

function About() {
	return (
		<section id="about-me" className="container">
			<div className="self-title">
				<h2>About Me</h2>
			</div>
			<div className="self-description">
				<p>
					My name is Caleb. I am a Web Developer. In 2022 I decided to flip
					careers paths from video editing to programming after I fell in love
					with the logic of coding. My development skills include: JavaScript, HTML5, CSS, Node.js, React.js, and more. I enrolled in a full stack web development
					program through Butler University which caught me up in the world of
					programming. I'm excited to see where this new world will take me, and
					can wait to keep learning.
				</p>
			</div>
			{/* A picture of me. I don't have any professional pictures of me, well not recent ones, so this one seemed decent. */}
			<div id="About" className="self-img">
				<img
					src={myPhoto}
					style={{ width: "100%" }}
					alt="Caleb Day giving a classic double thumbs up."
				/>
			</div>
		</section>
	)
}

export default About;