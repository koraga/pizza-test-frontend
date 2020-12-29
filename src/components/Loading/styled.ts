import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const keyframeRotate = keyframes`
    100% {
        transform: rotate(360deg)
    }
`

export const Spinner = styled.svg`
    position: relative;
    animation: ${keyframeRotate} 1s linear infinite;
    margin: 80px;
    width: 100px;
    height: 100px;

    circle {
        stroke: black;
        stroke-linecap: round;
        stroke-dasharray: 150, 300;
    }
`

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.2);
`
