import { LateChgFields_2 } from "./lateChgFields_2";

export interface LateChgUpdateRequest {
    lateChgLateChargeTypeValue: number;
    lateChgLateChargeTypeValueSpecified: boolean;
    lateChgLateChargeType: number | null;
    lateChgFields: LateChgFields_2;
}