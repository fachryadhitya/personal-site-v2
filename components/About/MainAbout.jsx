export function MainAbout() {
  return (
    <div className="min-h-screen bg-light-blue-primary">
      <div className="py-5 px-6 mx-auto container md:max-w-screen-md lg:max-w-screen-lg">
        <div className="border-black text-black border-2 border-opacity-30 p-4 md:p-7 flex flex-col rounded-md bg-white-primary">
          <h1 className="font-serif text-2xl leading-8 font-bold">
            I'm currently living in Tangerang, Indonesia.
          </h1>
          <p className="font-serif text-md md:text-lg mt-2 leading-8">
            Right now, I'm studying in Binus University majoring in Computer
            Science. I'm in my 2nd year as a college student.
          </p>
          <p className="font-serif text-md md:text-lg mt-2 leading-8">
            Lately, I make software using React and Javascript, but my current
            focus is in <span className="font-bold">Typescript</span> and{" "}
            <span className="font-bold">Node.js</span>.
          </p>
          <p className="font-serif text-md md:text-lg mt-2 leading-8">
            I'm currently not having any job, but{" "}
            <span className="font-bold">I'm open for remote work.</span> Just in
            case you have an interesting job, feel free to{" "}
            <a
              href="mailto:fachryadhitya@gmail.com"
              className="font-bold text-red-primary hover:underline"
            >
              contact
            </a>{" "}
            me!
          </p>
          <p className="font-serif text-md md:text-lg mt-2 leading-8">
            When I'm not working, I love to read stuff about{" "}
            <span className="underline">Football</span>. I'm a{" "}
            <span className="font-bold text-red-primary">
              Manchester United
            </span>{" "}
            fan.
          </p>
          <p className="font-sans font-bold text-sm mt-2 leading-8">
            **Please don't contact me if you hate Manchester United Football
            Club! just kidding :p
          </p>

          <a
            target="_blank"
            href="https://github.com/fachryadhitya"
            className="p-2 border-2 border-b-4 w-52 rounded-md border-dark-blue-primary bg-blue-primary text-white-primary font-bold border-opacity-100 mt-4 "
          >
            Get to know me more! ;)
          </a>
        </div>
      </div>
    </div>
  );
}
