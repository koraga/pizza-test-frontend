import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const IndexPage: FC = () => (
    <div>
        <Link to="/users">Таблица пользователей</Link>
    </div>
)
