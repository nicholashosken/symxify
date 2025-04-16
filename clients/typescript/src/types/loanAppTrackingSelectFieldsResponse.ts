import { LoanAppTracking } from "./loanAppTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppTrackingSelectFieldsResponse {
    loanAppTracking: LoanAppTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}