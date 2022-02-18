import React from "react";

export default function PageNotFound() {
  return (
    <div className="h-[85vh] flex flex-col items-center justify-center p-5">
      <div className="bubble p-5 sm:p-20">
        <h1 className="text-3xl font-bold">404: Not Found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>
    </div>
  )
}