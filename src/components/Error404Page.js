import React from "react";
import { useNavigate } from "react-router-dom";

export const Error404Page = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 10000);
  return (
    <div className="">
      <p className="pt-4 text-center">
        Oops! Looks like you took a wrong turn in the digital maze. Our
        tech-savvy hamster couldn't find the page you were looking for.
        <br /> <br />
        It's probably off on a wild adventure through cyberspace!
        <br /> <br />
      </p>
      <p className="pt-4 text-center">Redirecting in 10 Seconds...</p>
    </div>
  );
};
