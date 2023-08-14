import React from "react";
import { useInView } from "react-intersection-observer";


const Welcome = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.8, // Percentage of element visibility required to trigger
  });
  return (
    <>
      <div id="welcCont" ref={ref}>
        <div className="welcHeader">
          <h2>Welcome to IFZY</h2>
        </div>
        <div className="welcWrapper">
          {inView && <center className="welcImg">
            <img
              src="Image/Ifeoluwa.jpg"
              alt="founderImage"
              style={{ width: "350px", borderRadius: "50%" }}
            />
          </center>}
          <div className="welcText">
           {inView &&  <p className="wText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus harum eligendi maiores cumque possimus alias sit
              numquam, ipsa amet ea voluptas sunt, quibusdam illum voluptatibus
              provident sint. Veniam, perferendis recusandae. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nam similique a ut
              assumenda minus omnis praesentium minima, soluta possimus
              consequuntur illo voluptatem eos, enim optio nisi consectetur.
              Quis explicabo quibusdam quidem, architecto in consequatur
              voluptas aliquid odio qui itaque totam eligendi natus aspernatur
              praesentium facilis dolore, ab ea maxime tempore delectus
              accusamus libero corrupti aliquam amet. Officiis sit, fuga
              tempore, voluptas architecto perspiciatis nihil aut ut possimus
              veniam numquam sunt rerum molestias quaerat nam? Consequatur,
              dolorem, ipsum sit laudantium exercitationem placeat sunt animi
              laboriosam voluptatum, velit ut amet eius vitae soluta.
              Perferendis, repudiandae doloribus cumque tenetur odit culpa nemo
              dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis sunt, alias quisquam aut adipisci veritatis tempora doloremque consequatur tenetur atque ut vero deserunt in facilis molestiae minus voluptatibus repellat necessitatibus reprehenderit aperiam. Aperiam, optio similique! Nulla totam voluptatem nobis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus perferendis error molestiae praesentium doloribus ratione hic quaerat optio natus.
            </p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
