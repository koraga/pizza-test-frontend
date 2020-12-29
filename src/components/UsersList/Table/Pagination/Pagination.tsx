import React, { FC } from 'react'
import { Button, ButtonGroup, ButtonToolbar, Pagination as PaginationBS } from 'react-bootstrap'

interface PaginationProps {
    currentPage: number
    maxPages: number
    prevPage: () => void
    nextPage: () => void
    jumpToPage: (page: number) => void
    setItemsPerPage: (value: number) => void
}

export const Pagination: FC<PaginationProps> = ({
    prevPage,
    nextPage,
    jumpToPage,
    maxPages,
    currentPage,
    setItemsPerPage,
}) => {
    const getPageNumbers = () => {
        const paginationItemId = (i: number) => (
            <PaginationBS.Item key={i} onClick={() => jumpToPage(i)} active={currentPage === i}>
                {i}
            </PaginationBS.Item>
        )

        const pageNumbers = []

        if (maxPages <= 10) {
            // eslint-disable-next-line no-loops/no-loops
            for (let i = 1; i <= maxPages; i++) {
                pageNumbers.push(paginationItemId(i))
            }
        } else {
            let breakView
            let leftSide = 2
            let rightSlide = 2

            if (currentPage > maxPages - 2) {
                rightSlide = maxPages - currentPage
                leftSide = 2 - rightSlide
            } else if (currentPage < 2) {
                leftSide = currentPage
                rightSlide = 2 - leftSide
            }

            // eslint-disable-next-line no-loops/no-loops
            for (let i = 1; i <= maxPages; i++) {
                if (i <= 3) {
                    pageNumbers.push(paginationItemId(i))
                    continue
                }

                if (i > maxPages - 3) {
                    pageNumbers.push(paginationItemId(i))
                    continue
                }

                if (i >= currentPage - leftSide && i <= currentPage + rightSlide) {
                    pageNumbers.push(paginationItemId(i))
                    continue
                }

                if (pageNumbers[pageNumbers.length - 1] !== breakView) {
                    breakView = <PaginationBS.Ellipsis key={i} />
                    pageNumbers.push(breakView)
                }
            }
        }

        return pageNumbers
    }

    return (
        <>
            <PaginationBS className="overflow-auto px-1">
                <PaginationBS.First onClick={() => jumpToPage(1)} disabled={currentPage === 1} />
                <PaginationBS.Prev onClick={prevPage} disabled={currentPage === 1} />

                {getPageNumbers()}

                <PaginationBS.Next onClick={nextPage} disabled={currentPage === maxPages} />
                <PaginationBS.Last
                    onClick={() => jumpToPage(maxPages)}
                    disabled={currentPage === maxPages}
                />
            </PaginationBS>
            <p className="mb-1">Элементов на странице</p>
            <ButtonToolbar className="mb-4">
                <ButtonGroup>
                    <Button onClick={() => setItemsPerPage(5)}>5</Button>
                    <Button onClick={() => setItemsPerPage(10)}>10</Button>
                    <Button onClick={() => setItemsPerPage(25)}>25</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    )
}
