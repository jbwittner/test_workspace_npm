export class User {
  private username: string
  private userId: string

  constructor(username: string, userId: string) {
    this.username = username
    this.userId = userId
  }

  getUserName() {
    return this.username
  }

  getUserId() {
    return this.userId
  }
}
