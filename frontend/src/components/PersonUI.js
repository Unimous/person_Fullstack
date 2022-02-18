import React,{Component} from "react";
import PersonAdd from "./PersonAdd";
import PersonList from "./PersonList";

export default class PersonUI extends Component{

    state={
        persons: [],
        number: 0,
    }


    render(){
        return(
            <>
                <PersonAdd persons={this.state.persons} number={this.state.number} />
                <PersonList persons={this.state.persons} number={this.state.number}/>
            </>
        )
    }
}

