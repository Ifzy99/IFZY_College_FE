import React from 'react'
import "../addmission.css"
import Navbar from '../../../../src/components/landing Pg/Navbar'
import Copyright from '../../../../src/components/landing Pg/Copyright'

const ModeOfStdy = () => {
  return (
    <>
       <Navbar/>
       <div className="modeCont">
          <div className="heroPg">
           <div className="heroTxt">
           <h2>MODE OF STUDY</h2>
           <p>Flexible study structure tailored to everyone’s need.</p>
           </div>
          </div>

          <div className="txt1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex officia non quis perferendis voluptas nisi hic? Et deleniti consequuntur vel accusamus voluptate, laborum alias magni non quod, adipisci quisquam porro neque facere laudantium quam quasi. Incidunt placeat explicabo eius quis est voluptatibus natus maxime ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque consequuntur, impedit assumenda id sunt consectetur eum repudiandae a blanditiis.
          </div>

          <div className="inPClass">
              <div className="classHeader">
                 <h3>In-Person Classes</h3>
              </div>
              <div className="classCont">
                  <img src="Image/class.jpg" alt="" />
                  <p className="ms-lg-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus tempora aliquam quidem eos ex dolor cum fugit, quibusdam voluptas a illum ad reiciendis labore iure molestias velit consequuntur quisquam commodi soluta nam, rem accusamus? Fuga, rem. Libero possimus perspiciatis mollitia magnam ab modi deserunt earum minima tempora expedita. Exercitationem nesciunt tenetur voluptas, vel mollitia voluptatibus ipsum dolor sit amet consectetur adipisicing elit. Minima et iure praesentium pariatur, aspernatur commodi molestias, quidem vitae velit autem numquam quaerat voluptatem, eveniet facere placeat veniam sit enim? Accusamus in omnis asperiores autem adipisci.
                  </p>
              </div>
          </div>

          <div className="virtualC">
               <div className="classHeader">
                  <h3>Virtual Classes</h3>
               </div>
               <div className="classCont">
                   <img src="Image/onlineC.jpg" alt="" /> 
                   <p className="ms-lg-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi et repudiandae eaque porro. Pariatur veniam vel modi eveniet quia mollitia enim, a, vitae rem nemo officiis doloribus similique illo excepturi ut quod expedita nisi accusantium fugiat asperiores consectetur neque, eligendi incidunt quos. Atque repellendus ex sit voluptate nam qui, voluptates aspernatur? Vero nesciunt, laborum, quae ea iusto eaque rerum reprehenderit impedit sint tempora quos!</p>
               </div>
          </div>

          <div className="onlineC">
           <div className="classHeader">
               <h3>Online Tutorials</h3>
           </div>
           <div className="classCont">
               <img src="Image/tutorials.jpg" alt="" />
               <p className="ms-lg-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus nobis quae dolor eaque iure doloremque ipsum, itaque eum facilis quos, distinctio esse laudantium inventore repellat perspiciatis. Autem quia sapiente sed provident maxime exercitationem officia, nemo in, minus, error corrupti! Non eius impedit quam numquam itaque repellat aperiam neque temporibus blanditiis maiores obcaecati, commodi assumenda suscipit, laborum aliquam, cupiditate illum.ipsum dolor sit amet consectetur adipisicing elit. Velit sint distinctio dolores repellendus enim odio sequi deleniti corrupti tenetur sed amet, consectetur adipisicing elit. Quas ratione fuga optio laborum, facere dolore deserunt cupiditate sed id corporis distinctio libero vitae aliquam numquam doloribus voluptatum recusandae quam beatae.
               </p>
           </div>
          </div>
       
       </div>
       <Copyright/>
    
    </>
  )
}

export default ModeOfStdy