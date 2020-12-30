import React, { FC } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { IUser } from '@/interfaces/users'
import { getRoleLabelByKey, validateNumberLength, validateBirthday } from '@/helpers'

type Values = {
    name: string
    birthday: string
    role: string
    phone: string
    isArchive: boolean
}

interface UserFormProps {
    user?: IUser
    submitCallback: ({ name, birthday, role, phone, isArchive }: Values) => void
}

const availableRoles = ['driver', 'cook', 'waiter']

const UserSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Слишком короткое имя!').required('Обязательное поле!'),
    phone: Yup.string()
        .test('Проверка телефона', 'Введите корректный телефон!', val =>
            validateNumberLength(val || '', 11)
        )
        .required('Обязательное поле!'),
    birthday: Yup.string()
        .test(
            'Проверка даты',
            'Введите корректную дату!',
            val => validateNumberLength(val || '', 8) && validateBirthday(val || '')
        )
        .required('Обязательное поле!'),
    role: Yup.string()
        .test('Проверка роли', 'Выберите доступную роль!', val =>
            availableRoles.includes(val || '')
        )
        .required('Обязательное поле!'),
    isArchive: Yup.boolean(),
})

export const UserForm: FC<UserFormProps> = ({ user, submitCallback }) => {
    const formik = useFormik<Values>({
        initialValues: {
            name: user?.name || '',
            birthday: user?.birthday || '',
            role: user?.role || 'selected-false',
            phone: user?.phone || '',
            isArchive: user?.isArchive || false,
        },
        validationSchema: UserSchema,
        onSubmit: submitCallback,
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group as={Row} controlId="inputName">
                <Form.Label column sm={2}>
                    Имя
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        value={formik.values.name}
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        isValid={!formik.errors.name && formik.touched.name}
                        isInvalid={!!formik.errors.name && formik.touched.name}
                    />
                    {!!formik.errors.name && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.name}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="inputPhone">
                <Form.Label column sm={2}>
                    Телефон
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as={InputMask}
                        mask="+7 (999) 999-9999"
                        name="phone"
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        isValid={!formik.errors.phone && formik.touched.phone}
                        isInvalid={!!formik.errors.phone && formik.touched.phone}
                    />
                    {!!formik.errors.phone && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.phone}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="inputBirthday">
                <Form.Label column sm={2}>
                    Дата рождения
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as={InputMask}
                        name="birthday"
                        mask="99.99.9999"
                        value={formik.values.birthday}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        isValid={!formik.errors.birthday && formik.touched.birthday}
                        isInvalid={!!formik.errors.birthday && formik.touched.birthday}
                    />
                    {!!formik.errors.birthday && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.birthday}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="inputRole">
                <Form.Label column sm={2}>
                    Роль
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as="select"
                        name="role"
                        value={formik.values.role}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        isValid={!formik.errors.role && formik.touched.role}
                        isInvalid={!!formik.errors.role && formik.touched.role}
                    >
                        <option value="selected-false" disabled>
                            Выберите роль
                        </option>
                        {availableRoles.map((role, i) => (
                            <option key={i} value={role}>
                                {getRoleLabelByKey(role)}
                            </option>
                        ))}
                    </Form.Control>
                    {!!formik.errors.role && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.role}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="inputIsArchive">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check
                        checked={formik.values.isArchive}
                        name="isArchive"
                        onChange={formik.handleChange}
                        label="Архив"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Сохранить</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}
