import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${e.target.name}`);
  };

  return (
    <div id="homescreen" className="max-w-5xl p-10 mx-auto">
      <div className="flex justify-between mb-20">
        <h1 className="text-2xl font-medium tracking-tight uppercase md:text-4xl font-unbounded">
          Tool Library
        </h1>
        <button
          className="w-24 h-8 tracking-wider text-white bg-blue-600 rounded-sm"
          name="login"
          onClick={handleClick}
        >
          Login
        </button>
      </div>

      <div className="mb-20 md:flex md:gap-8">
        <div className="md:basis-1/2">
          <h2
            className="mb-12 text-4xl font-light leading-tight tracking-tight md:text-6xl text-neutral-900"
            id="home-subtitle"
          >
            The #1 List Platform to Track Your Stuff.
          </h2>

          <p className="mb-12 tracking-wider text- font-extralight text-neutral-700 leading-wider ">
            You've loaned your tools to a friend and now you're not sure which
            tool they have. You're too embarrassed to ask them, and it's become
            a pet peeve. Tool Library is an app that keeps track of the tools
            you loan out to friends, so you get them back!
          </p>
          <button
            className="h-16 mb-12 tracking-wider text-white bg-blue-600 rounded-sm w-52"
            name="register"
            onClick={handleClick}
          >
            Get Started Today
          </button>
        </div>
        <div className=" md:basis-1/2 md:mt-2">
          <img
            src={require("../assets/2429.jpg")}
            alt="Garage art"
            className="h-auto rounded-md"
          />
        </div>
      </div>

      <div className="p-6 mx-auto mb-20 bg-white rounded-lg md:p-16">
        <p className="mb-12 tracking-wider text-md md:text-2xl font-extralight text-neutral-700 leading-wider max-w-prose">
          "You might not know it yet, but Tool Library is an app that keeps
          track of the tools you loan out to friends so you get them back! It
          makes lending tools easy and efficient. It's like giving someone a key
          to your house."
        </p>
        <div className="w-full py-6 pl-6 md:flex md:gap-12 md:items-center">
          <p className="mb-4 text-md md:text-lg font-extralight text-neutral-700 leading-wider md:order-2">
            <span className="font-semibold">Stephen Wong</span>,<br /> Owner at
            Tool Library
          </p>
          <img
            src={require("../assets/avator.jpg")}
            className="w-20 h-auto rounded-full md:w-36"
            alt="Testimontial owner avator"
          />
        </div>
      </div>

      <div className="mx-auto">
        <img
          src={require("../assets/yellow-set-tools-black-background.jpg")}
          alt="Yellow on black background by senivpetro on Freepik"
          className="w-full h-auto mx-auto mb-16 rounded-md"
        />
        <p className="mb-12 text-2xl tracking-wider font-extralight text-neutral-700 leading-wider max-w-prose">
          Tool Library is the app for people who love lending tools! It's never
          been this easy for people to share their tool collections with friends
          and family.
        </p>

        <div className="mb-20">
          <p className="mb-8 text-2xl font-bold tracking-wider text-neutral-700 leading-wider max-w-prose">
            Register for an account or login today!
          </p>
          <button
            className="h-16 mb-2 mr-2 tracking-wider text-white bg-blue-600 rounded-sm w-52"
            name="register"
            onClick={handleClick}
          >
            Register
          </button>
          <button
            className="h-16 tracking-wider text-white bg-blue-600 rounded-sm w-52"
            name="login"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>

      <footer>
        <p className="text-xs font-thin tracking-tight text-center">
          {`Tool Library App. All Right Reserved. © Copyright ${new Date().getFullYear()}.`}
        </p>
      </footer>
    </div>
  );
};
