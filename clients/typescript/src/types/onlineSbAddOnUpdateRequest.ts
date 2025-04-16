import { OnlineSbAddOnFields_2 } from "./onlineSbAddOnFields_2";

export interface OnlineSbAddOnUpdateRequest {
    onlineSbAddOnRuleOrdinalValue: number;
    onlineSbAddOnRuleOrdinalValueSpecified: boolean;
    onlineSbAddOnRuleOrdinal: number | null;
    onlineSbAddOnFields: OnlineSbAddOnFields_2;
}