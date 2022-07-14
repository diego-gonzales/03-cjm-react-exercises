// From React v17 isn´t necessary import 'React', but for compatibility with before versions, we import it
import React from 'react';
import CrudAPI from './components/CrudAPI';
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <div>
      <h2>React Exercises</h2>
      {/* <CrudApp /> */}
      <CrudAPI />
    </div>
  );
}

export default App;
