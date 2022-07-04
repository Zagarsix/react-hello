import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">

		<Jumbotron 
			title="A warm welcome!"
			description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis kio aspernatur vitae fugiat numquam repellat."
			buttonURL="https://www.google.com/"
			buttonLabel="Call To Action!"
		/>

        <div className="card-group">
          <Card
            img="https://peru21.pe/resizer/4du3JKm2ACCquUalL4VTeD6Szyo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/43TWOBG7ABC4NONCWS6QLIM7L4.jpg"
            imgLabel="Attack on Titan"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            buttonURL="https://www.google.com/search?q=attack%20on%20titan"
            buttonLabel="Find Out More!"
          />
          <Card
            img="https://peru21.pe/resizer/4du3JKm2ACCquUalL4VTeD6Szyo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/43TWOBG7ABC4NONCWS6QLIM7L4.jpg"
            imgLabel="Attack on Titan"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            buttonURL="https://www.google.com/search?q=attack%20on%20titan"
            buttonLabel="Find Out More!"
          />
          <Card
            img="https://peru21.pe/resizer/4du3JKm2ACCquUalL4VTeD6Szyo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/43TWOBG7ABC4NONCWS6QLIM7L4.jpg"
            imgLabel="Attack on Titan"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            buttonURL="https://www.google.com/search?q=attack%20on%20titan"
            buttonLabel="Find Out More!"
          />
          <Card
            img="https://peru21.pe/resizer/4du3JKm2ACCquUalL4VTeD6Szyo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/43TWOBG7ABC4NONCWS6QLIM7L4.jpg"
            imgLabel="Attack on Titan"
            title="Card title"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            buttonURL="https://www.google.com/search?q=attack%20on%20titan"
            buttonLabel="Find Out More!"
          />
        </div>
      </div>
	  <Footer 
	  	copyright="Copyright &copy; Your Website 2022"
	  />
    </>
  );
};

export default Home;
