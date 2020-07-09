import React from 'react';

function App() {
  return (
    <div className="App">
      <Display value={10}/>
    </div>
  );
}

const Display = (props) =>
<div>
<h1>{props.value}</h1>
</div>
export default App;
