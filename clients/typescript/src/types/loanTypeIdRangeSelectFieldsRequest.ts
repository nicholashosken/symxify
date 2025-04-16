import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTypeIdRangeSingleSelectableFields } from "./loanTypeIdRangeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTypeIdRangeSelectFieldsRequest {
    loanTypeIdRangeIdRangeValue: number;
    loanTypeIdRangeIdRangeValueSpecified: boolean;
    loanTypeIdRangeIdRange: number | null;
    loanTypeIdRangeLoanTypeValue: number;
    loanTypeIdRangeLoanTypeValueSpecified: boolean;
    loanTypeIdRangeLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanTypeIdRangeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}