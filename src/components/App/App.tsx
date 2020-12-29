import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Container } from 'react-bootstrap'

import { store, persistor } from '@/store'
import { ErrorPage } from '@/pages/ErrorPage'
import { Header } from '@/components/Header'
import { IndexPage } from '@/pages/IndexPage'
import { UsersList } from '@/pages/UsersList'
import { UserId } from '@/pages/UsersList/UserId'
import { CreateUser } from '@/pages/UsersList/CreateUser'

export const App: FC = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <Header />
                <Container className="py-4">
                    <Switch>
                        <Route path="/" exact>
                            <IndexPage />
                        </Route>
                        <Route exact path="/users">
                            <UsersList />
                        </Route>
                        <Route path="/users/:id">
                            <UserId />
                        </Route>
                        <Route path="/create/user">
                            <CreateUser />
                        </Route>
                        <Route path="/404">
                            <ErrorPage message="Страница не найдена" code="404" />
                        </Route>
                        <Route path="*">
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </PersistGate>
    </Provider>
)
