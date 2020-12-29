import React, { FC } from 'react'
import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { UserForm } from '@/components/UserForm'
import { RootState } from '@/store'
import { IUsers } from '@/interfaces/users'
import { addUser } from '@/store/users'

export const CreateUser: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector<RootState, IUsers>(state => state.usersStore.users)

    const newId = users.length ? users[users.length - 1].id + 1 : 1

    const Swal = withReactContent(Swal2)

    return (
        <>
            <h4>Добавление нового пользователя</h4>
            <UserForm
                submitCallback={values => {
                    dispatch(
                        addUser({
                            id: newId,
                            ...values,
                        })
                    )
                    Swal.fire({
                        icon: 'success',
                        html: 'Пользователь добавлен!',
                        confirmButtonText: 'К списку пользователей',
                    })
                        .then(() => history.push(`/users`))
                        .catch(e => console.log(e))
                }}
            />
        </>
    )
}
