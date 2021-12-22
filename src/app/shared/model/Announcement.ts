export class Announcements {
    ID: number;
    Title: string;

    constructor(obj?) {
        this.ID = (obj && obj.ID) || undefined;
        this.Title = (obj && obj.Title) || "";
    }
}