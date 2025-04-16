import { ItcFraudApplytoAllCodes } from "./itcFraudApplytoAllCodes";
import { ItcFraudFraudCode } from "./itcFraudFraudCode";
import { ItcFraudHoldDays } from "./itcFraudHoldDays";
import { ItcFraudSeverity } from "./itcFraudSeverity";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcFraud {
    applytoAllCodes: ItcFraudApplytoAllCodes[];
    applytoAllCodesSpecified: boolean;
    fraudCode: ItcFraudFraudCode[];
    fraudCodeSpecified: boolean;
    fraudVendorId: string;
    fraudVendorName: string;
    holdDays: ItcFraudHoldDays[];
    holdDaysSpecified: boolean;
    itcFraudVendorValue: number;
    itcFraudVendorValueSpecified: boolean;
    itcFraudVendor: number | null;
    severity: ItcFraudSeverity[];
    severitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}