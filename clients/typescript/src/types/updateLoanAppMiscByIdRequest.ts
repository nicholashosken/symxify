import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppMiscFields_2 } from "./loanAppMiscFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanAppMiscByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppMiscFields: LoanAppMiscFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}