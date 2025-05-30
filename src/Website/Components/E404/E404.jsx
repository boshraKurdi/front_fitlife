import "./E404.css";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
export default function E404() {
  const error = useRouteError();
  let titleError;
  let bodyError;
  if (isRouteErrorResponse(error)) {
    titleError = error.status;
    bodyError = error.statusText;
  } else {
    titleError = 404;
    bodyError = "page not found";
  }
  return (
    <div className="container_e">
      <span className="left">{titleError}</span>
      <br />
      <div className="pulse">{bodyError}</div>
      <span className="right">go to Home</span>
    </div>
  );
}
