import { CheckFields_2 } from "./checkFields_2";

export interface CheckUpdateRequest {
    checkGlobalSequenceDateValue: string;
    checkGlobalSequenceDateValueSpecified: boolean;
    checkGlobalSequenceDate: string | null;
    checkGlobalSequenceValue: number;
    checkGlobalSequenceValueSpecified: boolean;
    checkGlobalSequence: number | null;
    checkFields: CheckFields_2;
}