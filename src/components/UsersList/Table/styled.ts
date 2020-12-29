import styled from '@emotion/styled'
import { Table as TableBS } from 'react-bootstrap'
import { SortType } from '@/hooks/useSortTable'

export const WrapperTable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Table = styled(TableBS)`
    overflow: scroll;
    @media (max-width: 770px) {
        display: inline-block;
    }
`

export const Tr = styled.tr`
    cursor: pointer;
`

export const Th = styled.th<{ minWidth?: number }>`
    min-width: ${props => props.minWidth}px;
`

export const Thead = styled.thead`
    th:hover {
        background: rgba(0, 0, 0, 0.075);
    }
`

export const ArrowSort = styled.div<{ direction: SortType | null }>`
    position: relative;
    width: 100%;
    user-select: none;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        right: 5px;
        top: 50%;
        border: 6px solid transparent;
    }

    &:before {
        border-bottom-color: ${props =>
            props.direction !== null && props.direction === 'ASC' ? '#000000' : '#cacaca'};
        margin-top: -11px;
    }

    &:after {
        border-top-color: ${props =>
            props.direction !== null && props.direction === 'DESC' ? '#000000' : '#cacaca'};
        margin-top: 3px;
    }
`
