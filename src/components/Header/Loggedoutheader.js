import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Register from './register';
import Login from './login';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron,Modal,ModalBody,ModalHeader,Button, FormGroup,Form,Input,Label} from 'reactstrap';


const styles = {
  flex: {
    display: 'flex'
  }
}

class SignIn extends Component {
  constructor(props)
    {
        super(props);
        this.state={
            isNavOpen :false,
            isModalOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);

    }
    
  
  render() {
    return (
      <div style={styles.flex}>
        <Login/>
        <Register />
      </div>
    )
  }
}

export default SignIn;