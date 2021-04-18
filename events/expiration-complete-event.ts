import { Subjects } from "./subjects";

export interface ExiprationCompleteEvent {
    subject : Subjects.ExiprationComplete;
    data : {
        orderId : string;
    }
}