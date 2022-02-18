import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from 'react-bootstrap';

export default class NavbarComponent extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="">Miika Lahti</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

