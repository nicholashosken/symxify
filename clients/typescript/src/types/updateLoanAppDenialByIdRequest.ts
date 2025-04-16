import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppDenialFields_2 } from "./loanAppDenialFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanAppDenialByIdRequest {
    loanAppDenialDenialNoticeValue: number;
    loanAppDenialDenialNoticeValueSpecified: boolean;
    loanAppDenialDenialNotice: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppDenialFields: LoanAppDenialFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}