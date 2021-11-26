import { Link } from "gatsby";
import React from "react";

export default function Index(props: any) {
  return (
    <div className="">
      <pre className="w-14 text-center p-5">
        {/* {JSON.stringify(props.weather, undefined, 2)} */}
        hi this is a test
      </pre>
      <Link to="/test" className="box-border">
        Link to test page
      </Link>
    </div>
  );
}
