import { WireInCmtCodeFields_2 } from "./wireInCmtCodeFields_2";

export interface WireInCmtCodeUpdateRequest {
    wireInCmtCodeSelectionValue: number;
    wireInCmtCodeSelectionValueSpecified: boolean;
    wireInCmtCodeSelection: number | null;
    wireInCmtCodeFields: WireInCmtCodeFields_2;
}