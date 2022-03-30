import { useState } from "react";
function Search({ search }) {
  const [value, setValue] = useState("");
  const handleKey = (event) => {
    if (event.key === `Enter`) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    search(value);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export { Search };
