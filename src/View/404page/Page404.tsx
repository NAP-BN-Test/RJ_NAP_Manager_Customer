import React from "react";

function Page404({history}: any) {
  return (
    <div>
      <h1>404Page</h1>
      <p>
        Redirect to
        <span
          onClick={() => history.push("/")}
          style={{
            color: "dodgerblue",
            paddingLeft: "10px",
            cursor: "pointer",
          }}
        >
          Login Page
        </span>
      </p>
    </div>
  );
}

export default Page404;
