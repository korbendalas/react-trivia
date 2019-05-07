import React, { Component } from 'react'
//action creator for fetch
import {fetchQuestions} from '../actions/fetchQuestions';
import {connect} from 'react-redux';

 class Setup extends Component {
     state={  
         num:10,
         category:'',
         dificulty:''
   
     }

onSelectCategory  = (event) => {
    this.setState({ category: event.target.value });
  }
  onSelectDificulty  = (event) => {
    this.setState({ dificulty: event.target.value });
  }
 
//On Form Change
     onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

    //Form on submit
      onSubmit = e => {
        e.preventDefault();
        const userData = {
           num: this.state.num,
            category:this.state.category,
            dificulty:this.state.dificulty
          };
       this.props.fetchQuestions(userData); 
       this.props.history.push('/quiz');
      }



  render() {
    return (
      <div className="setup">
        <form onSubmit={this.onSubmit}  className="setup-form">
        <label>
            Number of questions:
        </label>
        <input type="text" name="num"  value={this.state.num} onChange={this.onChange} />
     <label>
     Category:
     </label>
        <select  onChange={this.onSelectCategory} >
        <option value="">All</option>
            <option value="9">General Knowlege</option>
            <option value="10">Entertaiment: Books</option>
            <option value="11">Entertaiment: Film</option>
            <option value="12">Entertaiment: Music</option>
            <option value="13">Entertaiment: Musicals & Theaters</option>
            <option value="14">Entertaiment: Televison</option>
            <option value="15">Entertaiment: Video Games</option>
            <option value="16">Entertaiment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science:Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertaiment:Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertaiment: Japanese Anime & Manga</option>
            <option value="32">Entertaiment: Cartoon & Animations</option>
        </select>

     
     <label>
     Dificulty:
     </label>
        <select  onChange={this.onSelectDificulty} >
             <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>      
        </select>
      
        <input className="submit-button" type="submit" value="Submit" />
  </form>
      </div>
        
    )
  }
}



export default connect(null,{fetchQuestions})(Setup);