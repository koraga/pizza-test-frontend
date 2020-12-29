import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import * as S from '@/components/UsersList/Table/styled'
import { IUsers } from '@/interfaces/users'
import { getRoleLabelByKey } from '@/helpers'

interface TBodyProps {
    data: IUsers
}

export const TBody: FC<TBodyProps> = ({ data }) => {
    const history = useHistory()

    const handleClick = (id: number) => history.push(`/users/${id}`)

    return (
        <tbody>
            {data.length ? (
                data.map(user => (
                    <S.Tr key={user.id} onClick={() => handleClick(user.id)}>
                        <S.Th minWidth={50}>{user.id}</S.Th>
                        <S.Th minWidth={120}>{user.name}</S.Th>
                        <S.Th minWidth={130}>
                            {user.role}({getRoleLabelByKey(user.role)})
                        </S.Th>
                        <S.Th minWidth={200}>{user.phone}</S.Th>
                        <S.Th minWidth={120}>{user.birthday}</S.Th>
                        <S.Th minWidth={100}>{user.isArchive ? 'Да' : 'Нет'}</S.Th>
                    </S.Tr>
                ))
            ) : (
                <S.Tr>
                    <th colSpan={6} className="text-center">
                        Нет данных
                    </th>
                </S.Tr>
            )}
        </tbody>
    )
}
