import { RemittanceFields_2 } from "./remittanceFields_2";

export interface RemittanceUpdateRequest {
    remittanceGlobalSequenceDate: string | null;
    remittanceGlobalSequence: number | null;
    remittanceFields: RemittanceFields_2;
}