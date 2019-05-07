import React, { Component } from 'react'
import {connect} from 'react-redux';
import Question from './Question';

 class Quiz extends Component {
state={
numOfQuestions:null,
currentQuestionNum:0,
questions:[],
index :true,
score:0

}
 
// WHEN RECEVE PROPS UPDATE STATE 
UNSAFE_componentWillReceiveProps(props){

this.setState({numOfQuestions:props.questions.length});
this.setState({questions:props.questions}) 
}
//Increment current question 
incrementIndex=()=>{
  if(this.state.currentQuestionNum < this.state.numOfQuestions -1){ // -1
    this.setState({currentQuestionNum:this.state.currentQuestionNum +1}) ;
  }
 else{
   //Kad zavrsi inkrementaciju niza setuj na false i to ce pokrene logiku da renderuje score
   this.setState({index:false})

 }
}
nextQuestionOnClick=()=>{
  return this.state.questions[this.state.currentQuestionNum];

}

  render() {

  
    return (
      <div className="quiz">
     {/* Display how many questions are there */}
     {this.state.numOfQuestions?`${this.state.currentQuestionNum +1} / ${this.state.numOfQuestions}`:null} 

              {/* <Question question={this.nextQuestionOnClick()} click={this.incrementIndex} /> */}
     { this.state.index  ?  <Question question={this.nextQuestionOnClick()} click={this.incrementIndex} getScore={this.getScore}/>: <div className="score"> SCORE:{this.props.score}</div> } 

      </div>
 )
 }
 } 
 const mapStateToProps =(state)=>{
  //  console.log(state.score)
 return {questions:state.questions.results,
          score:state.score}

 };

export default connect(mapStateToProps,{}) (Quiz);

