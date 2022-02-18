import React from 'react';
import axios from 'axios';
import {Form, Button, Row, Col} from 'react-bootstrap'
import App from "../App"

export default class PersonAdd extends React.Component {
    constructor({persons},{number}){
        super(persons, number)
        this.state = {
            id: null,
            fname:'',
            lname:'',
            age:0
        }
    }

    handleChangefname = event => {
        this.setState({
            fname: event.target.value
        });
    }
    handleChangelname = event => {
        this.setState({
            lname: event.target.value,
        });
    }
    handleChangeage = event => {
        this.setState({
            age: event.target.value
        });
    }

    updateList(){
        console.log("henkilö lisätty, hakee dataa");
        axios.get("http://localhost:8080/persons")
            .then(res => {
                const data = res.data;
                console.log(data);
                window.location.reload();
            })


    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:8080/person`, {fname:this.state.fname,lname:this.state.lname,age:this.state.age})
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            })

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col xs lg="2" >
                        <h3>Add Person</h3>
                    </Col>
                    <Col xs lg="2">
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Control type="text" placeholder="First name" fname="fname" onChange={this.handleChangefname}/>
                        </Form.Group>
                    </Col>
                    <Col xs lg="2">
                        <Form.Group className="mb-3" controlId="formBasicPassword" >

                            <Form.Control type="text" placeholder="Last name" lname="lname" onChange={this.handleChangelname} />
                        </Form.Group>
                    </Col>
                    <Col xs lg="2">
                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control type="int" placeholder="Age" age="age" onChange={this.handleChangeage} />
                        </Form.Group>
                    </Col>
                    <Col xs lg="2">
                        <div className='d-grid gap-2'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>


        )
    }
}
