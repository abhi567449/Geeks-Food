import React from "react";
import "./Body.css";
import img1 from "./img1.avif";
import img2 from "./img2.avif";
import Cards from "./Cards";

function Body() {
  let card = [
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."
    },
    {
      item: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."
    },
    {
      item: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"
    },
    {
      item: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
    }
  ];
  
  console.log(card);
  

  return (
    <div>
      <div className="image1-div">
        <img className="img1" src={img1} alt="Image" />
        <div className="data">
          <h1>
            Let us find your{" "}
            <strong style={{ color: "rgb(189, 23, 63)" }}>Forever Food.</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="button-div">
            <button
              style={{ backgroundColor: "rgb(189, 23, 63)", color: "white" }}
            >
              Search Now
            </button>
            <button>Know More</button>
          </div>
        </div>
      </div>
      <div className="detail-div">
        <div className="image2-div">
          <img className="img2" src={img2} alt="Image" />
        </div>
        <div className="text-div">
          <div className="text">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h1>
            <p style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button className="touch-button">Get In Touch</button>
          </div>
        </div>
      </div>
      <div className="cards">
        {
        card.map((card, index) => (
          <div key={index} className="card">
            {<Cards card={card} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
