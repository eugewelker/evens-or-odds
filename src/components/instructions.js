import React from 'react';
import {connect} from 'react-redux';
import {expandInstructions,collapseInstructions} from '../actions/settings';

const Instructions = props => {
  const {instructionsExpanded,expandInstructions,collapseInstructions}=props;

  if (instructionsExpanded){
    return(
    <div>
      <h3> Instructions </h3>
      <p>Welcome to evens or odds. The game looks like this</p>
      <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
      <p>Make a choice in every draw, and see how many you get right!</p>
      <p>(Face cards don't count)</p>
      <br/>
      <button onClick={collapseInstructions}>Show less</button>
    </div>
  );
  }

  return(
    <div>
      <h3> Instructions </h3>
      <p>Welcome to evens or odds. The game looks like this...</p>
      <button onClick={expandInstructions}>Read more</button>
    </div>
  )

}

const mapStateToProps= state => {

  return{instructionsExpanded:state.instructionsExpanded};
}

const mapDispatchToProps=dispatch=>{
  return{
    expandInstructions:() => dispatch(expandInstructions()),
    collapseInstructions:() => dispatch(collapseInstructions())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Instructions);