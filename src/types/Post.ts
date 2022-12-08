export type TPostGenerel = {
  title: string
  body: string
}
export type TPost = TPostGenerel & {
  id: number
}

export type TPostFilter = TPostGenerel & {}
