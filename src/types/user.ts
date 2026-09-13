export interface User {
  createdAt: string
  deletedAt: string
  email: string
  id: string
  image: string | null
  name: string
  password: string

  slug: string
  updatedAt: string
}
