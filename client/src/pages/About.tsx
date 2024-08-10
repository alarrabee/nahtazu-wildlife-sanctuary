import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import {Divider} from 'antd'


const Home: React.FC =()=>(
    <Layout>
      <Header/>
      <body>
    <p>
      Welcome to Nahtazu... while our name might make you think different when you hear it we are in-fact a zoo! Although only a virtual one if you have time please take a moment to read below about us and our work.
    </p>
    <Divider style={{  borderColor: '#7cb305' }}>Our Mission</Divider>
    <p>
    At Nahtazu, our mission is to inspire and educate the public about wildlife conservation through immersive experiences and exceptional animal care. We are dedicated to preserving biodiversity and fostering a deeper understanding of the natural world, while promoting sustainable practices and engaging in global conservation efforts. Our commitment is to provide a safe, enriching environment for our animals and to create lasting connections between people and the planet.
    </p>
    <Divider style={{ borderColor: '#7cb305' }}>The Awsome people that work here</Divider>

    <p>
        <div class = 'profileZoo'> Jane Doe  Senior Zookeeper

        Jane Doe has been a dedicated Senior Zookeeper at Nahtazu for over a decade. With a degree in Animal Science and a passion for wildlife conservation, Jane oversees the care and enrichment of a diverse range of species. Her expertise includes veterinary care, habitat design, and animal behavior. Jane is committed to educating the public about wildlife conservation and inspiring future generations to protect our planet’s incredible biodiversity. When she’s not working with the animals, Jane enjoys hiking and volunteering with local environmental organizations. </div>

        <div class = 'profileZoo'>Alex Smith  Zookeeper

        Alex Smith is a dedicated zookeeper at Nahtazu, where he has been caring for animals for the past five years. With a background in Zoology and a passion for wildlife conservation, Alex specializes in the care and enrichment of primates and reptiles. His hands-on approach and commitment to animal well-being make him a valued member of the team. Outside of the zoo, Alex enjoys hiking and advocating for wildlife protection. </div>

        <div class ='profileZoo'> Emily Carter Zookeeper

        Emily Carter is a passionate zookeeper at Nahtazu, where she has dedicated the past eight years to caring for a variety of animal species. With a degree in Wildlife Biology and a deep love for animals, Emily specializes in the care and enrichment of big cats. Her hands-on experience and commitment to animal welfare shine through in her daily work. Outside the zoo, Emily enjoys wildlife photography and volunteering with conservation efforts.</div>

    </p>
    <Divider style={{  borderColor: '#7cb305' }} >Thank you</Divider>
    <p>
    Thank You for Visiting Our Zoo!

    We are thrilled that you took the time to explore our website and learn more about the incredible animals and experiences that await you at our zoo. Your interest and support play a crucial role in helping us continue our mission of wildlife conservation, education, and providing a memorable experience for all our visitors.

    We hope you found the information helpful and inspiring. If you have any questions or need further details, please don’t hesitate to reach out. We look forward to welcoming you in person and sharing the wonders of the animal kingdom with you!

    Warm regards,
    Nahtazu Team
    </p>
      </body>
      <Footer/>
    </Layout>
  );

  export default Home;