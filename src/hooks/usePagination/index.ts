import { useEffect, useState } from 'react'

export type PaginationReturnType<T> = {
    currentPage: number
    maxPages: number
    prevPage: () => void
    nextPage: () => void
    jumpToPage: (page: number) => void
    currentData: () => T[]
}

type usePaginationType = <T>(data: T[], itemsPerPage: number) => PaginationReturnType<T>

export const usePagination: usePaginationType = (data, itemsPerPage) => {
    useEffect(() => {
        setCurrentPage(1)
    }, [data, itemsPerPage])

    const [currentPage, setCurrentPage] = useState<number>(1)

    const maxPages = Math.ceil(data.length / itemsPerPage)

    const prevPage = () => setCurrentPage(Math.max(currentPage - 1, 1))

    const nextPage = () => setCurrentPage(Math.min(currentPage + 1, maxPages))

    const jumpToPage = (page: number) => {
        const numberPage = Math.max(1, page)
        setCurrentPage(Math.min(numberPage, maxPages))
    }

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(begin, end)
    }

    return {
        currentPage,
        maxPages,
        prevPage,
        nextPage,
        jumpToPage,
        currentData,
    }
}
