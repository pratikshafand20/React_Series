import { useRouteError } from "react-router";

//this is error page to show the proper error not the technical error retuned

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!!Something went wrong...😒</h1>
      <h2></h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
