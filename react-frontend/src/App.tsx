import React from "react";
import "./App.css";
import { AllDrugsList } from "./molecules/AllDrugsList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AllStudiesList } from "./molecules/AllStudiesList";

const client = new ApolloClient({
  uri: "http://localhost:1212/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          Drugs and Studies CRUD
        </header>
        <section>
          <AllDrugsList />
        </section>
        <section>
          <AllStudiesList />
        </section>
      </div>
    </ApolloProvider>
  );
}

export default App;
