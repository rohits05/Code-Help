import { Stack, VStack } from '@chakra-ui/react';
import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import NavBar from '../NavBar/navbar';
import Intro from '../Intro/Intro';
import Stats from '../Stats/Stats';
import Why from '../Why/Why';
import Meet from '../Meet/Meet';
import Like from '../Like/Like';
import Views from '../Views/Views';
import Fam from '../Fam/Fam';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        {/* // Stack is a component from Chakra UI that allows you to stack elements on top of each other for mobile and rest views */}
        <Stack
          direction={('column', 'row')}
          height="100%"
          justifyContent={('center', 'space-between')}
          alignItems={('center', 'center')}
          spacing={('16', '56')}
        >
          <VStack width={'full'}>
            <NavBar />
            <Intro />
            <Stats />
            <Why />
            <Meet/>
            <Like />
            <Views />
            <Fam />
            <Footer />
          </VStack>
        </Stack>
      </div>
    </section>
  );
};

export default Home;
