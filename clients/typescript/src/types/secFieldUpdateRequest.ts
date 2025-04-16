import { SecFieldFields_2 } from "./secFieldFields_2";

export interface SecFieldUpdateRequest {
    secFieldRecordSelectionValue: number;
    secFieldRecordSelectionValueSpecified: boolean;
    secFieldRecordSelection: number | null;
    secFieldFields: SecFieldFields_2;
}