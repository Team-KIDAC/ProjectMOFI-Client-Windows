
export default class LoggedInUser {
    private static username: string;
    private static authToken: string;

    public static GetUsername() {
        return this.username;
    }
    public static SetUsername(username: string) {
        this.username = username;
    }
    public static GetAuthToken() {
        return this.authToken;
    }
    public static SetAuthToken(authToken: string) {
        this.authToken = authToken;
    }
    public static ResetUserCred() {
        this.username = null as any;
        this.authToken = null as any;
    }
}