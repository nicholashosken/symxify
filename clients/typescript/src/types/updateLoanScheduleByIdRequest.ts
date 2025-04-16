import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanScheduleFields_2 } from "./loanScheduleFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanScheduleByIdRequest {
    accountNumber: string;
    loanId: string;
    loanScheduleId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanScheduleFields: LoanScheduleFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}