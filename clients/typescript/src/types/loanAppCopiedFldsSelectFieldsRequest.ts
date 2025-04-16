import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppCopiedFldsSingleSelectableFields } from "./loanAppCopiedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppCopiedFldsSelectFieldsRequest {
    loanAppCopiedFldsApplicationTypeValue: number;
    loanAppCopiedFldsApplicationTypeValueSpecified: boolean;
    loanAppCopiedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppCopiedFldsSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}