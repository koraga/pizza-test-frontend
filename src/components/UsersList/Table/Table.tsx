import React, { FC, useEffect, useState } from 'react'

import { IUser, IUsers } from '@/interfaces/users'
import { useSortTable } from '@/hooks/useSortTable'
import { usePagination } from '@/hooks/usePagination'
import { Search } from '@/components/UsersList/Table/Search'
import { TBody } from '@/components/UsersList/Table/TBody'
import { Pagination } from '@/components/UsersList/Table/Pagination'
import { checkSearchUser } from '@/helpers'

import * as S from './styled'

interface TableProps {
    data: IUsers
}

export const Table: FC<TableProps> = ({ data }) => {
    const [foundItems, setFoundItems] = useState<IUsers>(data)

    const [searchString, setSearchString] = useState<string>('')

    useEffect(() => {
        if (searchString !== '') {
            setFoundItems(data.filter(item => checkSearchUser(item, searchString)))
        } else {
            setFoundItems(data)
        }
    }, [searchString])

    const [itemsPerPage, setItemsPerPage] = useState<number>(5)

    const {
        currentSortProperty,
        currentSortType,
        handleClickSort,
        currentSortData,
    } = useSortTable<IUser>(foundItems)

    const {
        prevPage,
        nextPage,
        jumpToPage,
        maxPages,
        currentPage,
        currentData,
    } = usePagination<IUser>(currentSortData(), itemsPerPage)

    return (
        <S.WrapperTable>
            {/* Поиск по таблице */}
            <Search value={searchString} setSearchString={setSearchString} />

            <S.Table bordered hover size="sm">
                <S.Thead>
                    <S.Tr>
                        <th onClick={() => handleClickSort('id')}>
                            <S.ArrowSort
                                direction={currentSortProperty === 'id' ? currentSortType : null}
                            >
                                id
                            </S.ArrowSort>
                        </th>
                        <th onClick={() => handleClickSort('name')}>
                            <S.ArrowSort
                                direction={currentSortProperty === 'name' ? currentSortType : null}
                            >
                                Имя
                            </S.ArrowSort>
                        </th>
                        <th onClick={() => handleClickSort('role')}>
                            <S.ArrowSort
                                direction={currentSortProperty === 'role' ? currentSortType : null}
                            >
                                Должность
                            </S.ArrowSort>
                        </th>
                        <th onClick={() => handleClickSort('phone')}>
                            <S.ArrowSort
                                direction={currentSortProperty === 'phone' ? currentSortType : null}
                            >
                                Телефон
                            </S.ArrowSort>
                        </th>
                        <th onClick={() => handleClickSort('birthday')}>
                            <S.ArrowSort
                                direction={
                                    currentSortProperty === 'birthday' ? currentSortType : null
                                }
                            >
                                Дата рождения
                            </S.ArrowSort>
                        </th>
                        <th onClick={() => handleClickSort('isArchive')}>
                            <S.ArrowSort
                                direction={
                                    currentSortProperty === 'isArchive' ? currentSortType : null
                                }
                            >
                                Архив
                            </S.ArrowSort>
                        </th>
                    </S.Tr>
                </S.Thead>

                <TBody data={currentData()} />
            </S.Table>

            {/* pagination */}
            <Pagination
                prevPage={prevPage}
                nextPage={nextPage}
                jumpToPage={jumpToPage}
                maxPages={maxPages}
                currentPage={currentPage}
                setItemsPerPage={setItemsPerPage}
            />
        </S.WrapperTable>
    )
}
