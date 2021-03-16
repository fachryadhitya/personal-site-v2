import Head from "next/head";
import { Footer } from "../../components/Home/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { MainProject } from "../../components/Projects/MainProject";

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
  {
    title: "Food Sort Web App",
    desc: "Web App for sorting food in country (Indonesia not supported)",
    website: "https://foodsort.netlify.com",
    sourceCode: "https://github.com/fachryadhitya/Food-Sort-Web-App",
  },
  {
    title: "React CSV Parse",
    desc:
      "Parse your CSV file to virtualization table. It can handle big data CSV file as well 👀",
    website: "https://github.com/fachryadhitya",
    sourceCode: "https://github.com/fachryadhitya/csv-parser",
  },
];

const Projects = ({ dataProject }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <MainProject projectData={dataProject} />
      <Footer />
    </>
  );
};

export default Projects;

export function getStaticProps() {
  return {
    props: {
      dataProject,
    },
  };
}
