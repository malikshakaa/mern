import React,{ Component } from 'react';
class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: this.props.age
        }
        };
    render(){
        return(
            <>
            <h2>{this.props.firstname}, {this.props.lastname}</h2>
            <h4>Age: {this.state.position}</h4>
            <h4>Hair Color: {this.props.hair}</h4>
            <button onClick={ ()=> this.setState({position:this.state.position+=1}) }>Birthday button for {this.props.firstname} </button>
            </>
            
        );
        };
}
export default PersonalCard;