import React, {Component, setState} from 'react';
import axios from 'axios';
import {Table,Row, Col, Button} from 'react-bootstrap';



export default class PersonList extends Component{
    constructor(props){
        super(props)
        this.state={
            persons: [],
            number:0,
        }
    }



    componentDidMount(){
        axios.get("http://localhost:8080/persons")
            .then(res => {
                console.log(res.data);
                this.setState({persons: res.data});

            })
    }

    updateList(){
        axios.get("http://localhost:8080/persons")
            .then(res => {
                console.log(res.data);
                this.setState({persons: res.data});
                window.location.reload();
                }
            )

    }


    removePerson(id){
        axios.delete("http://localhost:8080/persons/"+id,{data: {id: id}})
            .then(res => {
                console.log(res.data);
                window.location.reload();
                }
            )

    }

    render(){
        return (
            <Row>
                <Col>
                    <Table className='striped bordered hover'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>age</th>
                            <th>  </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.persons
                                .map(person =>
                                    <tr key={person.id}>
                                        <td>{++this.state.number}</td>
                                        <td>{person.fname}</td>
                                        <td>{person.lname}</td>
                                        <td>{person.age}</td>
                                        <td>
                                            <Button variant="danger" type="submit" onClick={(this.removePerson.bind(this.removePerson,person.id)) }>
                                                Delete person
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>

                    </Table>
                </Col>
            </Row>
        )
    }
}

