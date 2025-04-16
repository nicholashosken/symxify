import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFinanceSingleSelectableFields } from "./loanAppFinanceSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFinanceSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppFinanceLocatorValue: number;
    loanAppFinanceLocatorValueSpecified: boolean;
    loanAppFinanceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppFinanceSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
