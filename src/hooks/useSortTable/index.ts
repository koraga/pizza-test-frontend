import { useState, useEffect } from 'react'

export type SortType = 'ASC' | 'DESC'

type SortTableReturnType<T> = {
    currentSortProperty: string
    currentSortType: SortType
    currentSortData: () => T[]
    handleClickSort: (property: string) => void
}

type useSortTableType = <T>(data: T[]) => SortTableReturnType<T>

export const useSortTable: useSortTableType = data => {
    const [currentSortProperty, setCurrentSortProperty] = useState<string>('')
    const [currentSortType, setCurrentSortType] = useState<SortType>('ASC')

    useEffect(() => {
        if (currentSortType === 'DESC') {
            setSortOrder(-1)
        } else {
            setSortOrder(1)
        }
    }, [currentSortType])

    const [sortOrder, setSortOrder] = useState<1 | -1>(1)

    const compareFunction = () => (a: any, b: any) => {
        if (a[currentSortProperty] < b[currentSortProperty]) {
            return -1 * sortOrder
        } else if (a[currentSortProperty] > b[currentSortProperty]) {
            return sortOrder
        } else {
            return 0
        }
    }

    const currentSortData = () => (currentSortProperty ? data.sort(compareFunction()) : data)

    const handleClickSort = (property: string) => {
        if (property === currentSortProperty) {
            setCurrentSortType(prevState => (prevState === 'ASC' ? 'DESC' : 'ASC'))
        } else {
            setCurrentSortProperty(property)
            setCurrentSortType('ASC')
        }
    }

    return {
        currentSortProperty,
        currentSortType,
        currentSortData,
        handleClickSort,
    }
}
