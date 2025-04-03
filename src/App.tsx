import React, { useState } from "react";
import QueryResult from "./components/QueryResult";
import { SearchFormState } from "./types";
import { defaultState } from "./state/defaultState";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App: React.FC = () => {
  const [formState, setFormState] = useState<SearchFormState>(defaultState);

  return (
    <main>
      <header>
        <h1>Flight Search</h1>
      </header>
      <section className="search-form">
        <SearchBar formState={formState} setFormState={setFormState} />
      </section>
      <section>
        <QueryResult
          departureDateTime={formState.departureDateTime}
          arrivalDateTime={formState.arrivalDateTime}
          numberOfPassengers={formState.numberOfPassengers}
        />
      </section>
    </main>
  );
};

export default App;
