
class Attendee {
    private static attendeeName: string = "Chloe Grace";
    private static attendeeDepartment: string = "CS Department";
    private static attendedTime: string = "10:10";
    private static attendedDate: string = "01/01/2022";

    public static getName() {
        return this.attendeeName;
    }
    public static getDepartment() {
        return this.attendeeDepartment;
    }
    public static getAttendedTime() {
        return this.attendedTime;
    }
    public static getAttendedDate() {
        return this.attendedDate;
    }
}

export default Attendee;