import React from "react";
import {Navbar} from "./Navbar.jsx";
import {Jumbotron} from './Jumbotron.jsx';
import {Card} from './Card.jsx';
import {Footer} from './Footer.jsx';


const Home = () => {
	return (
	<div>
        <Navbar/>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<Jumbotron />
				</div>
				<div className="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>		
				</div>
			</div>				
		<Footer/>		
	</div>
		
	);
};

export default Home;