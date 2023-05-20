import React from "react";
import useTitle from "../../hooks/useTitle";

const Page404 = () => {
  useTitle("404");
  return (
    <div className="container m-auto min-h-full">
      <h1 className="text-center text-9xl font-bold">404</h1>
    </div>
  );
};

export default Page404;
