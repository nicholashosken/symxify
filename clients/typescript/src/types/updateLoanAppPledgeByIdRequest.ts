import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPledgeFields_2 } from "./loanAppPledgeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanAppPledgeByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPledgeLocatorValue: number;
    loanAppPledgeLocatorValueSpecified: boolean;
    loanAppPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPledgeFields: LoanAppPledgeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}