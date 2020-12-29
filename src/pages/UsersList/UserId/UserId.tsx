import React, { FC } from 'react'
import Swal2 from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { IUsers } from '@/interfaces/users'
import { UserForm } from '@/components/UserForm'
import { updateUser } from '@/store/users'

export const UserId: FC = () => {
    const { id: strId } = useParams<{ id: string }>()
    const history = useHistory()
    const dispatch = useDispatch()

    const id = parseInt(strId)
    const users = useSelector<RootState, IUsers>(state => state.usersStore.users)
    const user = users.find(user => user.id === id)

    const Swal = withReactContent(Swal2)

    if (typeof user === 'undefined') {
        return <Redirect to="/404" />
    }

    return (
        <>
            <h4>id: {id}</h4>
            <UserForm
                user={user}
                submitCallback={values => {
                    dispatch(
                        updateUser({
                            id,
                            ...values,
                        })
                    )

                    Swal.fire({
                        icon: 'success',
                        html: 'Успешно сохранено!',
                        showCancelButton: true,
                        confirmButtonText: 'К списку пользователей',
                        cancelButtonText: 'Остаться на странице',
                    })
                        .then(e => e.isConfirmed && history.push(`/users`))
                        .catch(e => console.log(e))
                }}
            />
        </>
    )
}
