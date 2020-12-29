import moment from 'moment'

export const validateBirthday = (value: string): boolean => {
    const today = moment()
    const birthday = moment(value, 'DD.MM.YYYY')

    return today.isAfter(birthday)
}
