import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppNoteFields_2 } from "./loanAppNoteFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppNoteByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppNoteLocatorValue: number;
    loanAppNoteLocatorValueSpecified: boolean;
    loanAppNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppNoteFields: LoanAppNoteFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
