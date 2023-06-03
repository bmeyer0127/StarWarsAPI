import CharacterCard from "./Components/CharacterCard";
import { useState } from "react";

function App() {
  const [char, setChar] = useState("");
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  const handleCharChange = (e) => {
    setChar(e.target.value);
  };

  function search() {
    fetch("https://swapi.dev/api/people?search=" + char)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCount(json.count);
        setResults(json.results);
      });
  }

  return (
    <div className="container-fluid p-3">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12">
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Character:{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="character name"
                  aria-label="character name"
                  onChange={handleCharChange}
                ></input>
              </div>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-info mb-3 ms-3"
                onClick={search}
              >
                {<ion-icon name="search-outline"></ion-icon>}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card p-3">
                Found {count} Characters
                {results.map((result) => {
                  return (
                    <CharacterCard
                      key={result.name}
                      name={result.name}
                      gender={result.gender}
                      height={result.height}
                      weight={result.mass}
                      birthYear={result.birth_year}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
