import React, { Component } from 'react'
import {scoreAction} from '../actions/scoreAction';
import {connect} from 'react-redux';

 class Question extends Component {
     state={
        question_title:'',
        correct_answer:'',
        score:0,
        answers:[]
     };

// WHEN RECEVE PROPS UPDATE STATE 
UNSAFE_componentWillReceiveProps(props){

console.log('QUESTION RECIVED ', props.question )

//GET ANSVERS AND RANDOMISE THEM TO ARRAY

if(props){

    function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
    // Pick a random index
        index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
        ctr--;
    // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
    }
    let myArray = [...props.question.incorrect_answers,props.question.correct_answer];
     this.setState({
        question_title:props.question.question,
        correct_answer:props.question.correct_answer,
        answers:shuffle(myArray)});
    console.log(shuffle(this.state.answers));

    }//if
}//will recive



handleCheck =(e)=> {
    let selectedAnswer = e.currentTarget.dataset.id;
    //console.log( e.currentTarget.dataset.id )
    //Increment question
     this.props.click();
    //Return score
 this.props.scoreAction(this.state.score);

    //Ako je selektovani Odgovor[id] isti kao tacan odg
if(this.state.answers[selectedAnswer] === this.state.correct_answer){
    this.setState({score:this.state.score +1})
   
    console.log('CORRECT!!!!!')
}else{
    console.log('SRY INCORRECT')
}   
}
  render() {
  
    return (
      <div className="question">
        {/* DO A MAP OVER ANSWERS ARRAY */}
        {this.state.question_title}
       {  this.state.answers.map((answer,index) =>{
         return   <li key={index} onClick={this.handleCheck} data-id={index}> <p>{answer} </p></li> })     
        } 
      </div>
    )
  }
}


export default connect(null,{scoreAction})(Question);

