import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppReusedFldsSingleSelectableFields } from "./loanAppReusedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppReusedFldsSelectFieldsRequest {
    loanAppReusedFldsApplicationTypeValue: number;
    loanAppReusedFldsApplicationTypeValueSpecified: boolean;
    loanAppReusedFldsApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppReusedFldsSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
