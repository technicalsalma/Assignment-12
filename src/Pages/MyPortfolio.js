import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (              
      <div>
        <div class="hero min-h-screen bg-base-100">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
              class="max-w-sm rounded-lg shadow-2xl p-11"
              alt=""
            />
            <div>
              <h1 class="text-5xl font-bold">Salma Akter</h1>
              <p class="mb-5">
                <span className="font-bold">Email: </span>
                techinacalsalma@.com
              </p>
              <p class="mb-3">
                <span className="font-bold">Educational Background: </span>
                Studied at Bachelor of Arts(Final Year), Dinajpur Govt. College{" "}
              </p>
              <p class="mb-3">
                <span className="font-bold">Technology: </span>
                React,react router hooks, Node, Express, MongoDB,, React
                Bootstrap, Heroku & Firebase.
              </p>
              <p class="mb-3">
                <span className="font-bold">Skills:</span> HTML3, CSS3,
                JavaScript, React, Node.js,Local Storage, Firebase
                Authentication, API, Bootstrap, Tailwind CSS. JWT, Stripe,
                Express.js.MongoDB Tools & Software: VS Code, Git, Github,
                Netlify, Heroku, Firebase, Chrome Dev Tool, Figma, Adobe XD,
                Photoshop.
              </p>
              <p class="mb-1">
                <span className="font-bold">Projects:</span>
                <h1 className="text-1xl font-bold">
                  1. Fruit-warehouse (Full Stack):<br></br>
                  Live-Link{" "}
                  <a href="" className="text-primary">
                    https://sweet-fruit-house.firebaseapp.com/
                  </a>
                </h1>
                <p className="mb-5">
                  <span className="font-bold">Description: </span>
                  User can manage his/her products, add products and can delete
                  his/her products.
                </p>
                <h1 className="text-1xl font-bold ">
                  2.Lens-Queen (Full Stack):<br></br>
                  Live-Link{" "}
                  <a href="" className="text-primary">
                    https://salma-s-photography.web.app/
                  </a>
                </h1>
                <p>
                  <span className="font-bold">Description: </span>
                  It’s an independent influencer site.
                </p>
              </p>

              <h1 className="text-1xl font-bold mt-5">
                3.kILLING-HEMINGWAY :<br></br>
                Live-Link{" "}
                <a href="" className="text-primary">
                  https://assignment-9-killing-hemnigway-router.netlify.app/
                </a>
              </h1>
              <p>
                <span className="font-bold">Description: </span>
                Ii is simple project.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyPortfolio;