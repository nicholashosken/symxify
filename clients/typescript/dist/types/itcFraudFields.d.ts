import { VersionType } from "./versionType";
export interface ItcFraudFields {
    applytoAllCodes: number[];
    fraudCode: number[];
    fraudVendorId: boolean | null;
    fraudVendorName: boolean | null;
    holdDays: number[];
    itcFraudVendor: boolean | null;
    severity: number[];
    version1: VersionType;
}
