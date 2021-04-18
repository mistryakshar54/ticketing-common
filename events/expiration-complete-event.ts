import { Subjects } from "./subjects";

export interface ExiprationComplete {
    subject : Subjects.ExiprationComplete;
    data : {
        orderId : string;
    }
}