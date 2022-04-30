export interface ICurrentDateTimeGenerator {
    getCurrentDateString(): string;
    getCurrentTimeString(): string;
}

export default class CurrentDateTimeGenerator implements ICurrentDateTimeGenerator {
    currentDate: Date = new Date();

    public getCurrentDateString = () => {
        return this.formatDate(this.currentDate);
    }
    public getCurrentTimeString = () => {
        return this.formatTime(this.currentDate);
    }

    private formatDate = (date: Date) => {
        return (
            [
                date.getFullYear(),
                this.padTo2Digits(date.getMonth() + 1),
                this.padTo2Digits(date.getDate()),
            ].join('-')
        );
    }
    private formatTime = (date: Date) => {
        return (
            [
                this.padTo2Digits(date.getHours()),
                this.padTo2Digits(date.getMinutes()),
                this.padTo2Digits(date.getSeconds()),
            ].join(':')
        );
    }
    private padTo2Digits = (num: number) => {
        return num.toString().padStart(2, '0');
    }
}