import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number:0
    }
  }
  onClickHandler(){
    console.log('click');
  }
  render(){
    return (
      <div className="App">
        <Display value={this.state.number}/>
        <div>
          <button onClick={this.onClickHandler}>증가버튼</button>
        </div>
        <div>
          <button>감소버튼</button>
        </div>
      </div>
    );
  }
}

const Display = (props) =>
<div>
<h1>{props.value}</h1>
</div>
export default App;
