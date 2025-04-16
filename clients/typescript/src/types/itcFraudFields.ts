import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcFraudFields {
    applytoAllCodes: number[];
    applytoAllCodesSpecified: boolean;
    fraudCode: number[];
    fraudCodeSpecified: boolean;
    fraudVendorIdValue: boolean;
    fraudVendorIdValueSpecified: boolean;
    fraudVendorId: boolean | null;
    fraudVendorNameValue: boolean;
    fraudVendorNameValueSpecified: boolean;
    fraudVendorName: boolean | null;
    holdDays: number[];
    holdDaysSpecified: boolean;
    itcFraudVendorValue: boolean;
    itcFraudVendorValueSpecified: boolean;
    itcFraudVendor: boolean | null;
    severity: number[];
    severitySpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}