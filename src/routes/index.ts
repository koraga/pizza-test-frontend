import { FC } from 'react'

import { IndexPage } from '@/pages/IndexPage'

interface IRoute {
    component: FC
    path: string
    exact?: boolean
}

type RoutesType = IRoute[]

export const routes: RoutesType = [
    {
        component: IndexPage,
        path: '/',
        exact: true,
    },
]
