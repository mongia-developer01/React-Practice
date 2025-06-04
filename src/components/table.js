import { useState } from "react";

const Table = ({ data }) => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = data
    .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div>
      <input placeholder="Search name..." onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort {sortAsc ? "↓" : "↑"}
      </button>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}><td>{row.name}</td><td>{row.email}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
