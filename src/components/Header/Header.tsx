import React, { FC } from 'react'
import { Navbar, NavbarBrand, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { removeUsersFromStore } from '@/store/users'
import { RootState } from '@/store'
import { IUsers } from '@/interfaces/users'

export const Header: FC = () => {
    const dispatch = useDispatch()
    const users = useSelector<RootState, IUsers>(state => state.usersStore.users)

    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <NavbarBrand as={Link} to="/">
                    Главная
                </NavbarBrand>
                {!!users.length && (
                    <Nav>
                        <Button onClick={() => dispatch(removeUsersFromStore())}>
                            Очистить redux хранилище
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
}
