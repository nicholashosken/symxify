import { WireOutCmtCodeFields_2 } from "./wireOutCmtCodeFields_2";

export interface WireOutCmtCodeUpdateRequest {
    wireOutCmtCodeSelectionValue: number;
    wireOutCmtCodeSelectionValueSpecified: boolean;
    wireOutCmtCodeSelection: number | null;
    wireOutCmtCodeFields: WireOutCmtCodeFields_2;
}