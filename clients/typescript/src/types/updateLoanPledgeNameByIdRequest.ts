import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanPledgeNameFields_2 } from "./loanPledgeNameFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanPledgeNameByIdRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocatorValue: number;
    loanPledgeLocatorValueSpecified: boolean;
    loanPledgeLocator: number | null;
    loanPledgeNameLocatorValue: number;
    loanPledgeNameLocatorValueSpecified: boolean;
    loanPledgeNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanPledgeNameFields: LoanPledgeNameFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}