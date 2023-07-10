import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${e.target.name}`);
  };

  return (
    <div className="h-full">
      <div id="homescreen" className="mx-auto max-w-7xl">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl tracking-tight text-white uppercase md:text-4xl font-unbounded">
            Tool Library
          </h1>
          <button
            className="w-24 h-8 text-white rounded-sm bg-blue-cement hover:bg-blue-cement/90 active:bg-blue-cement/50"
            name="login"
            onClick={handleClick}
          >
            Login
          </button>
        </div>

        <div className="w-full grid-flow-col gap-8 mb-20 lg:grid auto-cols-auto">
          <div className="">
            <h2
              className="mb-12 text-4xl font-medium leading-tight tracking-tight text-white md:text-7xl"
              id="home-subtitle"
            >
              The #1 List Platform to Track Your Stuff.
            </h2>

            <p className="mb-12 tracking-wider font-extralight text-light-gray leading-wider ">
              You've loaned your tools to a friend and now you're not sure which
              tool they have. You're too embarrassed to ask them, and it's
              become a pet peeve. Tool Library is an app that keeps track of the
              tools you loan out to friends, so you get them back!
            </p>
            <button
              className="h-16 mb-12 tracking-wider text-white rounded-sm bg-blue-cement hover:bg-blue-cement/90 active:bg-blue-cement/50 w-52"
              name="register"
              onClick={handleClick}
            >
              Get Started Today
            </button>
          </div>
          <div className="">
            <img
              src={require("../assets/screenshots/desktop-black.png")}
              alt="Garage art"
              className="z-10 "
            />
            {/* <div className="absolute z-0 w-3/4 mt-48 rounded-lg opacity-25 h-1/3 -inset-10 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl"></div> */}
          </div>
        </div>

        <div className="p-6 mx-auto mb-20 rounded-lg bg-white/10 md:p-16">
          <p className="mb-12 tracking-wider text-white text-md md:text-2xl font-extralight leading-wider max-w-prose">
            "You might not know it yet, but Tool Library is an app that keeps
            track of the tools you loan out to friends so you get them back! It
            makes lending tools easy and efficient. It's like giving someone a
            key to your house."
          </p>
          <div className="w-full py-6 pl-6 md:flex md:gap-12 md:items-center">
            <p className="mb-4 text-white text-md md:text-lg font-extralight leading-wider md:order-2">
              <span className="font-semibold">Stephen Wong</span>,<br /> Owner
              at Tool Library
            </p>
            <img
              src={require("../assets/avator.jpg")}
              className="w-20 h-auto border-4 rounded-full md:w-36"
              alt="Testimontial owner avator"
            />
          </div>
        </div>

        <div className="mx-auto">
          <div className="relative">
            <img
              src={require("../assets/screenshots/tablet-black.png")}
              alt="Tablet Screenshot"
              className="w-2/6 h-auto mx-auto mb-16 rounded-md min-w-[150px]"
            />
            <img
              src={require("../assets/screenshots/mobile-black.png")}
              alt="Mobile screenshot"
              className="absolute top-[50%] w-1/6 h-auto mx-auto mb-16 rounded-md left-[50%] -mt-14 ml-14"
            />
          </div>

          <div className="mt-20">
            <p className="w-full mx-auto mb-12 text-lg tracking-wider text-center text-light-gray font-extralight leading-wider max-w-prose">
              Tool Library is the app for people who love lending tools! It's
              never been this easy for people to share their tool collections
              with friends and family.
            </p>

            <div className="flex flex-col justify-center w-full item-center">
              <p className="mb-8 text-2xl font-bold tracking-wider text-center text-white leading-wider max-w-prose">
                Sign up for an account or log in to start keeping track of your
                tools!
              </p>
              <div className="flex flex-col items-center justify-center gap-2 align-middle sm:flex-row">
                <button
                  className="h-16 tracking-wider text-white rounded-sm bg-blue-cement hover:bg-blue-cement/90 active:bg-blue-cement/50 w-52"
                  name="register"
                  onClick={handleClick}
                >
                  Register
                </button>
                <button
                  className="h-16 tracking-wider text-white rounded-sm bg-blue-cement hover:bg-blue-cement/90 active:bg-blue-cement/50 w-52"
                  name="login"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p className="mt-20 text-xs font-thin tracking-tight text-center text-med-gray">
            {`Tool Library App. All Right Reserved. © Copyright ${new Date().getFullYear()}.`}
          </p>
        </footer>
      </div>
    </div>
  );
};
