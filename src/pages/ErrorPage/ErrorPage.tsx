import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface ErrorPageProps {
    code?: '404' | '403'
    message?: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ code = 404, message }) => (
    <>
        <Row>
            <Col>Код ошибки: {code}</Col>
        </Row>
        {message && (
            <Row>
                <Col>{message}</Col>
            </Row>
        )}
        <Row>
            <Col>
                Вернуться на <Link to="/">главную</Link>
            </Col>
        </Row>
    </>
)
