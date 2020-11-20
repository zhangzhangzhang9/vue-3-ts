// ColumnList
export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}
export interface UserProps {
  isLogin: Boolean
  name?: String
  id?: Number
}

export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createAt: string
  columnId: number | string
}
