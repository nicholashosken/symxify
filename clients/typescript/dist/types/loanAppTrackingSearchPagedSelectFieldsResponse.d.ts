import { LoanAppTracking } from "./loanAppTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppTrackingSearchPagedSelectFieldsResponse {
    loanAppTracking: LoanAppTracking[];
    loanAppTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
