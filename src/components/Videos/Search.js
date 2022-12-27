import React, { useRef } from "react";

function Search({ setSearchQuery, handleVideo }) {
  const searchRef = useRef();

  const handleRef = () => {
    setSearchQuery(searchRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRef.current.value = "";
    handleVideo();
  };

  return (
    <div>
      <form
        className="ui form flex justify-center pb-6 pt-10"
        onSubmit={handleSubmit}
      >
        <label className="relative block">
          <span className="sr-only">Search</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm opacity-70 hover:opacity-90"
            placeholder=" Search categoris..."
            type="text"
            name="search"
            ref={searchRef}
            onChange={handleRef}
          />
        </label>
      </form>
    </div>
  );
}

export default Search;
