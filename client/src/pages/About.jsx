import React from 'react';
import {Divider, Row, Col} from 'antd'



 const subTitles = {
    fontSize: "50px"
 };
 const profTitles ={
  fontSize: "40px"
};
const Home =()=>(
      <section>
    <p class = 'normText' style= {{fontSize:'25px'}}>
      Welcome to Nahtazu... while our name might make you think different when you hear it we are in-fact a zoo! Although only a virtual one if you have time please take a moment to read below about us and our work.
    </p>
    <Divider style={{  borderColor: '#7cb305' }}><h2 style ={subTitles}className= "titles">Our Mission</h2></Divider>
    <p class = 'normText' style= {{fontSize:'25px'}}>
    At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
    </p>
    <Divider  style={{ borderColor: '#7cb305' }}><h2 style ={subTitles}className= "titles">The Awsome people that work here</h2></Divider>
    <p class = 'normText' style= {{fontSize:'25px'}}>The workers at the zoo are truly remarkable, dedicating their days to the care and well-being of the animals with unwavering passion and expertise. Their deep knowledge and commitment shine through in every aspect of their work, from enriching the animals' habitats to providing top-notch medical care. Their teamwork and enthusiasm create a vibrant, nurturing environment that not only ensures the health and happiness of the animals but also enriches the experience for every visitor. Their tireless efforts are a testament to their love for wildlife and their commitment to conservation.</p>

    <p>
    
      <div class = 'profileZoo'> <Divider variant ="dashed" style={{ borderColor: '#7cb305' }}><h4 style ={profTitles}className= "titles">Jane Doe  Senior Zookeeper</h4></Divider>
        <Row>
            <Col span = '12'>
                <img src ="https://www.pbs.org/wnet/nature/files/2021/07/Lauren-Del-Grosso-2.jpg" alt='image of zoo keeper Jane Doe' width = '500px'></img>
            </Col>
            <Col span ='8'>
                <p class = 'normText' style= {{fontSize:'25px'}}>Jane Doe has been a dedicated Senior Zookeeper at Nahtazu for over a decade. With a degree in Animal Science and a passion for wildlife conservation, Jane oversees the care and enrichment of a diverse range of species. Her expertise includes veterinary care, habitat design, and animal behavior. Jane is committed to educating the public about wildlife conservation and inspiring future generations to protect our planet’s incredible biodiversity. When she’s not working with the animals, Jane enjoys hiking and volunteering with local environmental organizations. </p>
            </Col> 
        </Row> </div>
      <div class = 'profileZoo'><Divider variant ="dashed" style={{ borderColor: '#7cb305' }}><h4 style ={profTitles}className= "titles">Alex Smith  Zookeeper</h4></Divider>
          <Row>
            <Col span ='8'>
                <p class = 'normText' style= {{fontSize:'30px'}}>Alex Smith is a dedicated zookeeper at Nahtazu, where he has been caring for animals for the past five years. With a background in Zoology and a passion for wildlife conservation, Alex specializes in the care and enrichment of primates and reptiles. His hands-on approach and commitment to animal well-being make him a valued member of the team. Outside of the zoo, Alex enjoys hiking and advocating for wildlife protection. </p>
            </Col> 
              <Col span = '12'>
                  <img src ="https://scontent.ffsd3-1.fna.fbcdn.net/v/t39.30808-6/244552092_10159324217637976_3696873297567861404_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=safy9VkRE0wQ7kNvgGx1oRA&_nc_ht=scontent.ffsd3-1.fna&oh=00_AYAxKKwsWg0m9orVWgouxQxP8yFnw-hhXzRdOHmZSAVyLw&oe=66C448E6" alt='image of zoo keeper Alex Smith' width = '600px'></img>
              </Col>
          </Row></div>
        <div class ='profileZoo'> <Divider variant ="dashed" style={{ borderColor: '#7cb305' }}><h4 style ={profTitles}className= "titles">Emily Carter Zookeeper</h4></Divider>
          <Row>
            <Col span = '12'>
                <img src ="https://online-learning-college.com/wp-content/uploads/2023/12/A-Day-in-the-Life-of-a-Zookeeper-scaled.jpg" alt='image of zoo keeper Emily Carter' width = '600px'></img>
            </Col>
            <Col span ='8'>
                <p class = 'normText' style= {{fontSize:'30px'}}>Emily Carter is a passionate zookeeper at Nahtazu, where she has dedicated the past eight years to caring for a variety of animal species. With a degree in Wildlife Biology and a deep love for animals, Emily specializes in the care and enrichment of big cats. Her hands-on experience and commitment to animal welfare shine through in her daily work. Outside the zoo, Emily enjoys wildlife photography and volunteering with conservation efforts.</p>
            </Col> 
                
          </Row>
        </div>

    </p>
    <Divider style={{  borderColor: '#7cb305' }} ><h2 style ={subTitles} className="titles">Thank you</h2></Divider>
    <p class = 'normText' style= {{fontSize:'25px'}}>
    Thank You for Visiting Our Zoo!

    We are thrilled that you took the time to explore our website and learn more about the incredible animals and experiences that await you at our zoo. Your interest and support play a crucial role in helping us continue our mission of wildlife conservation, education, and providing a memorable experience for all our visitors.

    We hope you found the information helpful and inspiring. If you have any questions or need further details, please don’t hesitate to reach out. We look forward to welcoming you in person and sharing the wonders of the animal kingdom with you!

    Warm regards,
    Nahtazu Team
    </p>
      </section>
  );

  export default Home;