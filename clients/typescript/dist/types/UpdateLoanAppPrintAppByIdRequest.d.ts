import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPrintAppFields_2 } from "./loanAppPrintAppFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppPrintAppByIdRequest {
    loanAppPrintAppApplicationTypeValue: number;
    loanAppPrintAppApplicationTypeValueSpecified: boolean;
    loanAppPrintAppApplicationType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPrintAppFields: LoanAppPrintAppFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
