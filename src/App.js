import './App.css';

//Components
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Others from './components/others/Others';
import ThreePoints from './components/threepoints/ThreePoints';
import Custom from './components/custom/Custom';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import ImageWithText from './components/imagewithtext/ImageWithText';

function App() {
  const hero1Styles = {
    hero1Style: {
      height: '90vh',
      width: '100%',
      minHeight: '450px',
      position: 'relative',
    },
    hero1TextStyle: {
      fontSize: 'clamp(2em, 9vw, 5em)',
      fontWeight: '400',

      color: 'white',

      width: '100%',
      textAlign: 'center',

      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const hero2Styles = {
    hero2Style: {
      height: '80vh',
      width: '100%',
      minHeight: '450px',
      position: 'relative',
      objectFit: 'contain',
    },
    hero2TextStyle: {
      fontSize: 'clamp(2em, 9vw, 5em)',
      fontWeight: '400',

      color: 'white',

      width: '100%',
      textAlign: 'center',

      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      maxHeight: '20vh',
    },
  };

  const hero3Styles = {
    hero3Style: {
      height: '90vh',
      width: '100%',
      minHeight: '450px',
      position: 'relative',
    },
    hero3TextStyle: {
      fontSize: 'clamp(2em, 7vw, 3.5em)',
      position: 'absolute',
      bottom: '0%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      fontWeight: '400',
      whiteSpace: 'pre',
      textAlign: 'center',
    },
  };

  const carousel1 = {
    folder: 'rattan-furniture',
    imagesArray: Array.from({ length: 6 }, (_, i) => i + 1),
  };

  const carousel2 = {
    folder: 'this-is-ata',
    imagesArray: Array.from({ length: 6 }, (_, i) => i + 1),
  };

  return (
    <div>
      <Navbar />

      <Hero
        text={'Elevate your interior'}
        heroStyle={hero1Styles.hero1Style}
        textStyle={hero1Styles.hero1TextStyle}
        image={1}
      />

      <ImageWithText />
      {/* <Text /> */}

      <ThreePoints />

      <Hero
        id={'furniture'}
        text={'Rattan Furniture'}
        heroStyle={hero2Styles.hero2Style}
        textStyle={hero2Styles.hero2TextStyle}
        image={2}
      />

      <Carousel imageData={carousel1} />

      <Hero
        id={'ata'}
        text={`Strong. Elegant. Durable. 
Not rattan. This is Ata.`}
        heroStyle={hero3Styles.hero3Style}
        textStyle={hero3Styles.hero3TextStyle}
        image={3}
      />

      <Carousel imageData={carousel2} />

      <Others text1={'Bamboo Handicrafts'} text2={'Rattan Handicrafts'} />

      <Custom />

      <Footer />
    </div>
  );
}

export default App;
