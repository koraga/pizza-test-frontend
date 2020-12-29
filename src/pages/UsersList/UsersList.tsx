import React, { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '@/store'
import { NoData } from '@/components/UsersList/NoData'
import { Table } from '@/components/UsersList/Table'
import { Loading } from '@/components/Loading'
import { AppState } from '@/store/app'
import { IUsers } from '@/interfaces/users'

export const UsersList: FC = (): ReactElement => {
    const { loader, error, errorMessage } = useSelector<RootState, AppState>(
        state => state.appStore
    )
    const users = useSelector<RootState, IUsers>(state => state.usersStore.users)

    if (error) {
        return <div>{errorMessage}</div>
    }
    if (loader) {
        return <Loading />
    }
    if (!users.length) {
        return <NoData />
    }

    return (
        <>
            <Link to="/create/user">Добавить пользователя</Link>
            <Table data={users} />
        </>
    )
}
