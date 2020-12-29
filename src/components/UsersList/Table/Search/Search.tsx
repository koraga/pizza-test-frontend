import React, { FC } from 'react'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'

interface SearchProps {
    value: string
    setSearchString: (value: string) => void
}

export const Search: FC<SearchProps> = ({ value, setSearchString }) => (
    <Row className="py-2">
        <Col>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Поиск по таблице</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={value}
                    onChange={e => setSearchString(e.target.value)}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
        </Col>
    </Row>
)
