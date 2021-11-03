import * as React from "react";

const Main = (props) => {
  return (
    <main className="flex-grow">
      <pre className="w-14 text-center p-5">{JSON.stringify(props.weather, undefined, 2)}</pre>
    </main>
  );
};

export default Main;
