import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import logotype from '../assets/logotype.png'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" variant="light">
            <Container style={{flexWrap: 'wrap'}}>
                <NavLink style={{color:'white', flex:'1 1 auto'}} to={SHOP_ROUTE}>
                    <Image width={200} height={40} src={logotype}/>
                </NavLink>
                <NavLink to={SHOP_ROUTE} style={{flex:'1 1 auto'}} >

                </NavLink>

                <div style={{flex:'1 1 auto'}}>
                    <div className='p-1'>

                    </div>
                    <div>
                        social
                    </div>
                </div>
                
                {user.isAuth ?
                    <Nav  style={{color: 'white', flex:'1 1 auto'}}>
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"dark"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    : null
                    /*<Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>*/
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
