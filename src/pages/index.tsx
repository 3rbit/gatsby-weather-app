import React from "react";
import Layout from "../templates/layout";

// const IndexPage = (props) => {
//   console.log(props);
//   return (
//     <Layout>
//       <pre className="w-14 text-center p-5">{JSON.stringify(props.weather, undefined, 2)}</pre>
//     </Layout>
//   );
// };

export const Index = () => {
  return (
    <Layout>
      <pre className="w-14 text-center p-5">
        hi world
      </pre>
    </Layout>
  );
};

// export default IndexPage;
