import { AttendeeClient, IAttendeeClient } from "../ApiClient/ApiClient";

export default class Attendee {
    private static attendeeId: string = "20191030";
    private static attendeeName: string = "Kalindu Rithmal";
    private static attendeeDepartment: string = "CS Department";
    private static attendeeImagePath: string = "CS Department";
    private static attendedTime: string = "10:10:13";
    private static attendedDate: string = "01-01-2022";

    public static getId() {
        return this.attendeeId;
    }
    public static getName() {
        return this.attendeeName;
    }
    public static getDepartment() {
        return this.attendeeDepartment;
    }
    public static getAttendeeImagePath() {
        return this.attendeeImagePath;
    }
    public static getAttendedTime() {
        return this.attendedTime;
    }
    public static getAttendedDate() {
        return this.attendedDate;
    }
    public static getGeneratedAttendanceRecordId() {
        return this.attendedDate + "_" + this.attendedTime;
    }
    public static setId(givenId: string) {
        this.attendeeId = givenId;
    }
    public static setName(givenName: string) {
        this.attendeeName = givenName;
    }
    public static setDepartment(givenDepartment: string) {
        this.attendeeDepartment = givenDepartment;
    }
    public static async setAttendeeImagePath(givenId: string) {
        let apiClient: IAttendeeClient = new AttendeeClient();
        await apiClient.getImagePathOfAttendee(givenId).then((_response: string | null) => { console.log(String(_response)); this.attendeeImagePath = String(_response); });
    }
    public static async setDateAsync(givenDate: string) {
        await (this.attendedDate = givenDate);
    }
    public static async setTimeAsync(givenTime: string) {
        await (this.attendedTime = givenTime);
    }
}