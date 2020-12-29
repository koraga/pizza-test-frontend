import React, { FC, ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

import { fetchUsers } from '@/store/users'

export const NoData: FC = () => {
    const dispatch = useDispatch()
    const handleClickFetchUsers = () => dispatch(fetchUsers())

    return (
        <>
            <h4>Нет данных, нажмите кнопку для загрузки данных с сервера</h4>
            <Button onClick={handleClickFetchUsers}>Загрузить</Button>
        </>
    )
}
