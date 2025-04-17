import { ItcFraudApplytoAllCodes } from "./itcFraudApplytoAllCodes";
import { ItcFraudFraudCode } from "./itcFraudFraudCode";
import { ItcFraudHoldDays } from "./itcFraudHoldDays";
import { ItcFraudSeverity } from "./itcFraudSeverity";
import { VersionType } from "./versionType";

export interface ItcFraud {
    applytoAllCodes: ItcFraudApplytoAllCodes[];
    fraudCode: ItcFraudFraudCode[];
    fraudVendorId: string;
    fraudVendorName: string;
    holdDays: ItcFraudHoldDays[];
    itcFraudVendor: number | null;
    severity: ItcFraudSeverity[];
    version1: VersionType;
}