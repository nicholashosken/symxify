import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppVerFormFields_2 } from "./loanAppVerFormFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppVerFormByIdRequest {
    loanAppVerFormVerFormValue: number;
    loanAppVerFormVerFormValueSpecified: boolean;
    loanAppVerFormVerForm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppVerFormFields: LoanAppVerFormFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
