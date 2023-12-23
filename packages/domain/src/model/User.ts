export class User {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    getUserName() {
        return this.username;
    }
}