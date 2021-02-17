import { Project } from "./Project";
import Link from "next/link";

export function MainProject({ projectData }) {
  return (
    <div className="min-h-screen py-5 px-6 bg-light-blue-primary">
      <div className="flex flex-col md:max-w-screen-md lg:max-w-screen-lg  mx-auto">
        <Link href="/Projects">
          <h3 className="cursor-pointer py-2 text-center rounded-lg w-44 text-xl font-serif border-2 text-blue-primary font-bold border-dark-blue-primary border-opacity-40 hover:text-white-primary hover:border-dark-blue-primary">
            All Project
          </h3>
        </Link>
        <Project props={projectData} />
      </div>
    </div>
  );
}
