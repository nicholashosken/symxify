import { ItcFraudApplytoAllCodes_2 } from "./itcFraudApplytoAllCodes_2";
import { ItcFraudFraudCode_2 } from "./itcFraudFraudCode_2";
import { ItcFraudHoldDays_2 } from "./itcFraudHoldDays_2";
import { ItcFraudSeverity_2 } from "./itcFraudSeverity_2";
import { VersionType } from "./versionType";
export interface ItcFraud_2 {
    applytoAllCodes: ItcFraudApplytoAllCodes_2[];
    fraudCode: ItcFraudFraudCode_2[];
    fraudVendorId: string;
    fraudVendorName: string;
    holdDays: ItcFraudHoldDays_2[];
    itcFraudVendor: number | null;
    severity: ItcFraudSeverity_2[];
    version1: VersionType;
}
