import React from "react";
import { Link, NavLink, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="mx-auto text-center">
      <FaceFrownIcon className="icon w-64 mx-auto text-teal-500" />
      <div>
        <h2 className="text-xl mb-2">
          <span className="">Error</span>
          {status || 404}
        </h2>
        <p className="text-xl mb-2">{error?.message}</p>

        <NavLink to="/">
          <button className="btn btn-accent my-6">
            <Link className="text-white">Back to Summer Camp</Link>
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default ErrorPage;
