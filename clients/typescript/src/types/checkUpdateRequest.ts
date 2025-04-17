import { CheckFields_2 } from "./checkFields_2";

export interface CheckUpdateRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    checkFields: CheckFields_2;
}