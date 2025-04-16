import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppReusedFldsFields_2 } from "./loanAppReusedFldsFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanAppReusedFldsByIdRequest {
    loanAppReusedFldsApplicationTypeValue: number;
    loanAppReusedFldsApplicationTypeValueSpecified: boolean;
    loanAppReusedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppReusedFldsFields: LoanAppReusedFldsFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}