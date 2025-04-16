import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanTypeIdRangeFields_2 } from "./loanTypeIdRangeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanTypeIdRangeByIdRequest {
    loanTypeIdRangeIdRangeValue: number;
    loanTypeIdRangeIdRangeValueSpecified: boolean;
    loanTypeIdRangeIdRange: number | null;
    loanTypeIdRangeLoanTypeValue: number;
    loanTypeIdRangeLoanTypeValueSpecified: boolean;
    loanTypeIdRangeLoanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanTypeIdRangeFields: LoanTypeIdRangeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}