import Head from "next/head";
import { MainAbout } from "../../components/About/MainAbout";
import { Footer } from "../../components/Home/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <MainAbout />
      <Footer />
    </>
  );
};

export default About;
