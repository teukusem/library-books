import React from "react";
import { Input } from "antd";

function Search(props) {
  const { Search } = Input;
  return (
    <>
      <Search
        placeholder="Seacrh book"
        onChange={props.onChange}
        style={{
          width: 200,
        }}
      />
    </>
  );
}

export default Search;
