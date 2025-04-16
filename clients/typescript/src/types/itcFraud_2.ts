import { ItcFraudApplytoAllCodes_2 } from "./itcFraudApplytoAllCodes_2";
import { ItcFraudFraudCode_2 } from "./itcFraudFraudCode_2";
import { ItcFraudHoldDays_2 } from "./itcFraudHoldDays_2";
import { ItcFraudSeverity_2 } from "./itcFraudSeverity_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcFraud_2 {
    applytoAllCodes: ItcFraudApplytoAllCodes_2[];
    applytoAllCodesSpecified: boolean;
    fraudCode: ItcFraudFraudCode_2[];
    fraudCodeSpecified: boolean;
    fraudVendorId: string;
    fraudVendorName: string;
    holdDays: ItcFraudHoldDays_2[];
    holdDaysSpecified: boolean;
    itcFraudVendorValue: number;
    itcFraudVendorValueSpecified: boolean;
    itcFraudVendor: number | null;
    severity: ItcFraudSeverity_2[];
    severitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}