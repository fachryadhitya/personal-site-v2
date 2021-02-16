import { Footer } from "../../components/Home/Footer";
import { MainHome } from "../../components/Home/MainHome";
import { Navbar } from "../../components/Navbar/Navbar";
import Head from "next/head";

const dataProject = [
  {
    title: "Note(d) Web App",
    desc: "Web App for writing your note(s)!",
    website: "https://noted-sigma.vercel.app",
    sourceCode: "https://github.com/fachryadhitya",
  },
  {
    title: "Covid 19 Data",
    desc: "Web App for seeing Covid 19 World Data",
    website: "https://coronareal.netlify.com",
    sourceCode: "https://github.com/fachryadhitya/covid-19-web-app",
  },
];

const Home = ({ dataProject }) => {
  return (
    <>
      <Head>
        <title>Fachry's Personal Site</title>
      </Head>
      <Navbar />
      <MainHome props={dataProject} />
      <Footer />
    </>
  );
};

export default Home;

export function getStaticProps() {
  return {
    props: {
      dataProject,
    },
  };
}
