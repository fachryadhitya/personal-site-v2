import Link from "next/link";
import { Project } from "../Projects/Project";

export function MainHome({ props }) {
  return (
    <>
      <div className="bg-light-blue-primary min-h-screen">
        <div className=" flex flex-col justify-around py-5 px-6 mx-auto container md:max-w-screen-md lg:max-w-screen-lg">
          <div className="flex flex-col border-2 border-t-4  border-b-4 p-4 md:p-7 rounded-md border-opacity-40 border-red-primary">
            <div className=" font-serif text-xl text-center mb-4">
              <h1 className="leading-10 font-bold">Hi, I'm Fachry</h1>
              <h2 className="font-sans leading-7 text-dark-blue-primary">
                Software Developer based in Jakarta, Indonesia.
              </h2>
            </div>
            <div className="h-48">
              <img
                className="h-full mx-auto max-w-full"
                src="/programming.svg"
                alt=""
              />
            </div>
          </div>

          <div className="mt-6">
            <Link href="/Projects">
              <h3 className="hover:bg-dark-blue-primary cursor-pointer py-2 text-center rounded-lg w-44 text-xl font-serif border-2 text-blue-primary font-bold border-dark-blue-primary border-opacity-40 hover:text-white-primary hover:border-dark-blue-primary">
                Recent Project
              </h3>
            </Link>
            <Project props={props} />
          </div>
        </div>
      </div>
    </>
  );
}
