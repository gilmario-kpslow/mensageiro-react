import React, { Component } from 'react'
import {Nav, Navbar,  NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <span className="fa fa-home"></span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/login">
                            <NavItem eventKey={2}>
                                <span className="fa fa-user"></span> Login
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/conversa">
                            <NavItem eventKey={2}>
                                <span className="fa fa-chat"></span> Conversa
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}