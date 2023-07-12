import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${e.target.name}`);
  };

  return (
    <div className="h-full">
      <div className="w-full py-20 bg-slate-50">
        <div className="max-w-4xl px-8 mx-auto">
          <div className="flex justify-between mb-20">
            <h1 className="text-xl font-bold tracking-tight uppercase text-theme-green md:text-4xl font-archivo">
              Tool Library
            </h1>
            <button
              className="w-20 h-8 text-sm text-white rounded-md font-open-sans bg-theme-green hover:bg-theme-yellow active:bg-theme-yellow/50"
              name="login"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
          <div className="w-full grid-flow-col gap-8 mb-12 lg:grid auto-cols-auto">
            <div className="flex flex-col">
              <h2
                className="mb-12 text-4xl font-bold leadiarng-tight font-archivo text-theme-red md:text-7xl"
                id="home-subtitle"
              >
                The Best App to Track Your Stuff.
              </h2>
              <p className="mb-12 tracking-wider md:leading-loose font-open-sans text-theme-red ">
                You've loaned your tools to a friend and now you're not sure
                which tool they have. You're too embarrassed to ask them, and
                it's become a pet peeve. Tool Library is an app that keeps track
                of the tools you loan out to friends, so you get them back!
              </p>
              <button
                className="self-center justify-center h-16 mb-12 text-white rounded-md tracking-widerfont-open-sans bg-theme-green hover:bg-theme-yellow active:bg-theme-yellow/50 w-52 "
                name="register"
                onClick={handleClick}
              >
                Get Started Today
              </button>
            </div>

            <div className="flex justify-center md:block">
              <img
                src={require("../assets/screenshots/desktop-black.png")}
                alt="Garage art"
                className="z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-8 mx-auto">
        <div className="items-center px-10 py-20 mb-20 rounded-lg md:my-40 md:px-20 py-mx-auto bg-theme-red">
          <p className="tracking-wider text-center text-white text-md md:text-2xl font-extralight leading-wider max-w-prose">
            You might not know it yet, but Tool Library is an app that keeps
            track of the tools you loan out to friends so you get them back! It
            makes lending tools easy and efficient. It's like giving someone a
            key to your house.
          </p>
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
            <p className="w-full mx-auto mb-12 text-lg tracking-wider text-center text-theme-red font-extralight leading-wider max-w-prose">
              Tool Library is the app for people who love lending tools! It's
              never been this easy for people to share their tool collections
              with friends and family.
            </p>

            <div className="flex flex-col justify-center w-full item-center">
              <p className="mb-8 text-2xl font-bold tracking-wider text-center text-theme-red leading-wider max-w-prose">
                Sign up for an account or log in to start keeping track of your
                tools!
              </p>
              <div className="flex flex-col items-center justify-center gap-2 align-middle sm:flex-row">
                <button
                  className="h-16 tracking-wider text-white rounded-md bg-theme-green hover:bg-theme-yellow active:bg-theme-yellow/50 w-52"
                  name="register"
                  onClick={handleClick}
                >
                  Register
                </button>
                <button
                  className="h-16 tracking-wider text-white rounded-md bg-theme-green hover:bg-theme-yellow active:bg-theme-yellow/50 w-52"
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
