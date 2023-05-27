import CharacterCard from "./Components/CharacterCard";
import { useState } from "react";

function App() {
  const [char, setChar] = useState("");

  const handleCharChange = (e) => {
    setChar(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-xxl-4 offset-xxl-4 col-sm-12">
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
              <button type="button" className="btn btn-info mb-3 ms-3">
                {<ion-icon name="search-outline"></ion-icon>}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card p-3">
                Found (put number here) Characters
                <CharacterCard
                  height="7,000,000,000cm"
                  gender="What???"
                  name="AssButt"
                  weight="0.0034kg"
                  birthYear="6"
                />
                <CharacterCard
                  height="7,000,000,000cm"
                  gender="What???"
                  name="AssButt"
                  weight="0.0034kg"
                  birthYear="6"
                />
                <CharacterCard
                  height="7,000,000,000cm"
                  gender="What???"
                  name="AssButt"
                  weight="0.0034kg"
                  birthYear="6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
