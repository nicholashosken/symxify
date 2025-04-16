import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppCopiedFldsFields_2 } from "./loanAppCopiedFldsFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppCopiedFldsByIdRequest {
    loanAppCopiedFldsApplicationTypeValue: number;
    loanAppCopiedFldsApplicationTypeValueSpecified: boolean;
    loanAppCopiedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppCopiedFldsFields: LoanAppCopiedFldsFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
