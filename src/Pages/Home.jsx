import { Hero, AboutUs, Slider, Grades, DearParents } from "../composants";
import backgroundImage from '../Assets/Background.png'

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <main className="w-[1280px] mx-auto bg-slate-50 mt-2">
      <section className="">
        <Slider />
      </section>
      <section className="">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-8 ">
        <AboutUs />
      </section>
      <section className="sm:px-16 px-8 sm:py-8">
        <Grades />
      </section>
      <section className="sm:px-16 px-8 sm:py-8">
        <DearParents />
      </section>
    </main>
  );
};

export default Home;
