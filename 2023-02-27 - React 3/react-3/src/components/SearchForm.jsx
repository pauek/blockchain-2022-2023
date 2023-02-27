
import React, { useRef } from 'react'

const SearchForm = ({ onQuery }) => {
  const queryRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const query = queryRef.current.value;
    onQuery(query);
    queryRef.current.value = "";
  }

  return (
    <form onSubmit={submit}>
      <input ref={queryRef} type="text" name="query" />
      <button>Search</button>
    </form>
  )
}

export default SearchForm