export const getRoleLabelByKey = (key: string): string => {
    switch (key) {
        case 'waiter':
            return 'Официант'
        case 'driver':
            return 'Водитель'
        case 'cook':
            return 'Повар'
        default:
            return key
    }
}
