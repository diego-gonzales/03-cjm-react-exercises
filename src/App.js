// From React v17 isn´t necessary import 'React', but for compatibility with before versions, we import it
import React from 'react';
import CrudAPI from './components/CrudAPI';
import CrudApp from "./components/CrudApp";
import NestedSelects from './components/NestedSelects';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <div>
      <h2>React Exercises</h2>
      {/* <CrudApp /> */}
      {/* <CrudAPI /> */}
      {/* <SongSearch /> */}
      <NestedSelects />
    </div>
  );
}

export default App;
