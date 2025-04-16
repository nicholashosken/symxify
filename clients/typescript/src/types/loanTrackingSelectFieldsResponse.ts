import { LoanTracking } from "./loanTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTrackingSelectFieldsResponse {
    loanTracking: LoanTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}