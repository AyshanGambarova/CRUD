export type TLoginUser = {
  username: string
  password: string
}
export type TUserGenerel = {
  name: string
  email: string
  gender: string
  status: string
}
export type TUser = TUserGenerel & {
  id: number
}

export type TUserFilter = TUserGenerel & {}
