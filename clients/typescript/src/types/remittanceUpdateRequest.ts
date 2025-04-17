import { RemittanceFields_2 } from "./remittanceFields_2";

export interface RemittanceUpdateRequest {
    remittanceGlobalSequenceDateValue: string;
    remittanceGlobalSequenceDateValueSpecified: boolean;
    remittanceGlobalSequenceDate: string | null;
    remittanceGlobalSequenceValue: number;
    remittanceGlobalSequenceValueSpecified: boolean;
    remittanceGlobalSequence: number | null;
    remittanceFields: RemittanceFields_2;
}