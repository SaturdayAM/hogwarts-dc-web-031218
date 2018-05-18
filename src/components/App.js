import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList'


//Assign hog ids

let id = 0;
hogs.forEach(hog=>{
	hog['id'] = id;
	id++;
})


class App extends Component {

  constructor(props){
  	super(props);
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogsList hogsArr={hogs}/>
      </div>
    )
  }
}

export default App;
