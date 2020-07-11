import React from 'react';
// import './App.css'

class App extends React.Component {
    //state초기화
    constructor(props) {
        super(props);
        this.state = {
            value: 10
        }
        //강제로 this는 여기다!
        this.onClickHandler = this.onClickHandler.bind(this);
        // onClickHandlerRemove.bind(this);는 아래처럼하면 생략가능
    }
    onClickHandler(){
      // this.state.value++; 하면 에러
      // console.log(this); 왜냐하면 this가 undefined라서 bind필수
      //그럼이제 this.state.value++;가 잘나올까?
      // console.log(this.state);로보면 잘 증가하고있지만 갱신을하지못한다. 
      // -> state자체를 바꿔주는 setstate메소드사용
      this.setState({value:this.state.value+1});
    }
    onClickHandlerRemove=()=>{
      this.setState({value:this.state.value-1});
    }
    render() {
        return (
            <div className="App">
                <Display value={this.state.value}/>
                <div><button onClick={this.onClickHandler}>증가</button></div>
                <div><button onClick={this.onClickHandlerRemove}>감소</button></div>
            </div>
        );
    }
}

const Display = ({value}) => (
  <div>
      <h1>{value}</h1>
  </div>
)
export default App;