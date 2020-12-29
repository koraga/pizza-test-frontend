import { IUser } from '@/interfaces/users'
import { getRoleLabelByKey } from '@/helpers/getRoleLabelByKey'

const prepareValue = (value: string | number): string => value.toString().toLowerCase()

export const checkSearchUser = (user: IUser, searchString: string): boolean => {
    const search = prepareValue(searchString)

    return (
        prepareValue(user.id).includes(search) ||
        prepareValue(user.name).includes(search) ||
        prepareValue(user.role).includes(search) ||
        prepareValue(getRoleLabelByKey(user.role)).includes(search) ||
        prepareValue(user.birthday).includes(search) ||
        prepareValue(user.phone).includes(search)
    )
}
