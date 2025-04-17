import { CheckCompositeKey } from "./checkCompositeKey";

export interface CheckCreateResponse {
    checkCompositeKey: CheckCompositeKey;
    messageId: string;
}