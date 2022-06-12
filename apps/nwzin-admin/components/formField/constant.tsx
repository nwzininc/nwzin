const MessageMapping ={
    max: 'Maximum allowed Value exceeded',
    min: 'Enter Minumum Value',
    minLength: 'Maximum allowed length exceeded',
    maxLength: 'Enter minimum length required',
    validate: 'Invalid Value'
}
export const errorMessageMaping = (type: string) => {
    return MessageMapping[type]
}