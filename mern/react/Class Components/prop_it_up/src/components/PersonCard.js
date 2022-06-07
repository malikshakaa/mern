import React,{ Component } from 'react';
class PersonalCard extends Component {
    render(){
        return(
            <>
            <h2>{this.props.firstname}, {this.props.lastname}</h2>
            <h4>Age: {this.props.age}</h4>
            <h4>Hair Color: {this.props.hair}</h4>
            </>
            
        );
        };
}
export default PersonalCard;