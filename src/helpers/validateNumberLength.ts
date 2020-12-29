export const validateNumberLength = (value: string, length: number): boolean => {
    const value_length_without_mask = value.replace(/[^0-9]+/gi, '').length
    return value_length_without_mask === length
}
