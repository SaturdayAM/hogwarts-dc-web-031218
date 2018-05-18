import React from 'react';
import HogItem from './HogItem';
import { Dropdown } from 'semantic-ui-react'


let greaseOptions = [
  {text: 'Greased', value: 'greased'},
  {text: 'Ungreased',value: 'ungreased'},
  {text: 'All', value: 'all'}
]

let sortOptions = [
	{text: 'Name', value: 'name'},
	{text: 'Weight', value: 'weight'},
	{text: 'Default', value: 'default'}
]

/*
	props = {
		hogsArr: [{
			name:
			specialty:
			greased:
			weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water
			highest medal achieved
		}]
	}
*/

class HogsList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sort: 'default', //default, name, weight
			greased: 'all' //all, greased, ungreased
		};
	}
	//***********Event Handlers*************
	handleGreaseEvent = (event, text) =>{
		this.setState({
			greased: text.value
		})
	}

	handleSortEvent = (event, text) =>{
		this.setState({
			sort: text.value
		})
	}

	//************Filter/Sort Functions**********
	greaseFilter = (hogsArr) =>{
		let flag = this.state.greased;
		switch(flag){
			case 'greased':
				return hogsArr.filter(hog=>(hog.greased));
			case 'ungreased':
				return hogsArr.filter(hog=>(!hog.greased));
			default:
				return hogsArr;
		}
	}

	sortHogs = (hogsArr) =>{
		let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
		let flag = this.state.sort;
		switch(flag){
			case 'name':
				return hogsArr.sort((h1, h2)=> 
										h1.name.localeCompare(h2.name));
			case 'weight':
				return hogsArr.sort((h1, h2)=> 
										h1[weight] - h2[weight]);
			default:
				return [...this.props.hogsArr];
		}
	}


	//***************Hog Tile Getter*********
	getHogTiles = () =>{
		let hogs = [...this.props.hogsArr];
		//By sort
		hogs = this.sortHogs(hogs);
		//By Greasiness
		hogs = this.greaseFilter(hogs);

		return hogs.map(hog => {
					return <HogItem key={hog.id} hog={hog}/>
				})
	}


	render(){
		return(
			<div>
				<div>	
					  <label>Select Greasiness</label>
					  <Dropdown
					   fluid selection options={greaseOptions}
					   value={this.state.greased}
					   onChange={this.handleGreaseEvent}
					    />

					  <label>Sort Hogs</label>
					  <Dropdown
					   fluid selection options={sortOptions}
					   value={this.state.sort}
					   onChange={this.handleSortEvent}
					    />
				</div>
				<br/><br/>
				<div className="ui grid container">
					{this.getHogTiles()}
				</div>
			</div>
		);		
	}
}

export default HogsList;