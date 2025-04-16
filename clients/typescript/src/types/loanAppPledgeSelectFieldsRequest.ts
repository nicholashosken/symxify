import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPledgeSingleSelectableFields } from "./loanAppPledgeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppPledgeSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPledgeLocatorValue: number;
    loanAppPledgeLocatorValueSpecified: boolean;
    loanAppPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppPledgeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}