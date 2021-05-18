import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const updateValue = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  React.useEffect(() => {
    searchValue.current.focus();
  });
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your cocktail here</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={updateValue}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
