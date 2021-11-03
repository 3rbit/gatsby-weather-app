import * as React from "react";

const Header = (props: any) => {

  return (
    <header>
      <form
        onSubmit={props.handleSubmit}
        className="container mx-auto my-1.5 rounded-full shadow-md p-5 flex items-center"
      >
        <input
          type="text"
          placeholder="Search Location"
          ref={props.formValue}
          className="w-full px-6 leading-tight focus:outline-none"
        />
        <input
          type="submit"
          value="Search"
          className="rounded-full w-28 h-12 p-2 bg-blue-500 active:bg-blue-300 focus:outline-none"
        />
      </form>
      <h1 className="font-bold text-3xl text-center py-5">{props.location}</h1>
    </header>
  );
};

export default Header;
