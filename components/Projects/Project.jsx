export function Project({ props }) {
  return (
    <>
      <div className="flex flex-wrap  flex-col md:flex-row ">
        {props?.map((i) => (
          <div className="background flex flex-col w-full md:mr-4 mb-4 md:w-5/12 flex-wrap border-2 rounded-lg py-4 px-3 border-opacity-80 border-b-8 border-dark-blue-primary mt-4">
            <h3 className="font-sans font-semibold text-2xl leading-8">
              {i.title}
            </h3>
            <h3 className="text-sm md:text-md font-serif leading-7">
              {i.desc}
            </h3>

            <div className="flex mt-3 flex-wrap">
              <a
                target="_blank"
                href={i.website}
                className="border-2 mr-4 py-1 border-r-4 border-l-4 border-blue-primary rounded-xl w-24 text-center mt-2 bg-white-primary "
              >
                Website
              </a>
              <a
                href={i.sourceCode}
                target="_blank"
                className="border-2 py-1 border-l-4 border-r-4 border-blue-primary rounded-xl w-32 text-center mt-2 bg-white-primary"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
