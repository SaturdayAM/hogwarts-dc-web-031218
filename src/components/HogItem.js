import React from 'react';
import { Card, Image } from 'semantic-ui-react'
class HogItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showDetails: true
		}
	}
	getImage = (hogObj) =>{
		let pic = require(`../hog-imgs/${hogObj.name.replace(/\s/g, '_').toLowerCase()}.jpg`);
		return pic;
	}	
	handleClick = (e) =>{
		console.log("clicked");
		let change = !this.state.showDetails;
		this.setState({
			showDetails: change
		})
		e.target.innerHTML === "Show Details" ? 
		                        e.target.innerHTML = "Hide Details" 
		                        : e.target.innerHTML = "Show Details";
	}
	showDetails = (hog) =>{
		return(		
					<div>
					<h2>Details</h2> 
						<ul>
							<li><b>Specialty:</b>{hog.specialty}</li>
							<li><b>Highest Medal Achieved:</b> {hog["highest medal achieved"]}</li>
							<li><b>Greased: </b>{hog["greased"]? "True" : "False"}</li>
							<li><b>Weight: </b>
								 {hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
						    </li>
						</ul>
					</div>)
	}

	render(){
		let {hog} = this.props;
		return(
			<Card className="ui eight wide column centered pigTile">
				<Image className="centered pigImage" src={this.getImage(hog)}
				 alt="PigletPicture"
				 onClick={this.handleClick}/>
				<Card.Content>
					<Card.Header>
						{hog.name}
					</Card.Header>
					<Card.Description>
						{this.state.showDetails ? 
						this.showDetails(hog) :
						null}
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default HogItem;