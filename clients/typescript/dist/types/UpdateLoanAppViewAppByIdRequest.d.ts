import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppViewAppFields_2 } from "./loanAppViewAppFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppViewAppByIdRequest {
    loanAppViewAppApplicationTypeValue: number;
    loanAppViewAppApplicationTypeValueSpecified: boolean;
    loanAppViewAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppViewAppFields: LoanAppViewAppFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
