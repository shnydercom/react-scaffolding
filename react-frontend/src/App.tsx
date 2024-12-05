import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllDrugsList } from "./molecules/AllDrugsList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1212/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          Header from create-react-app
        </header>
        <section>
          <AllDrugsList />
        </section>
      </div>
    </ApolloProvider>
  );
}

export default App;
