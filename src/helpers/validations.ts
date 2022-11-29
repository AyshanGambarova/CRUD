const messageRequired = 'Required'
const messageEmail = 'E-mail must be valid'

export default {
    required: [(value: string) => !!value || messageRequired],
    email:[ (value: string) => /.+@.+\..+/.test(value) || messageEmail]

}
