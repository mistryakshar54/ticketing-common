import { Subjects } from "./subjects";

export interface OrderCompleteEvent {
    subject : Subjects.OrderCompleted;
    data : {
        orderId : string;
    }
}

