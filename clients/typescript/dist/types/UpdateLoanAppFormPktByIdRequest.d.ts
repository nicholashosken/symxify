import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFormPktFields_2 } from "./loanAppFormPktFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanAppFormPktByIdRequest {
    loanAppFormPktFormPacketTypeValue: number;
    loanAppFormPktFormPacketTypeValueSpecified: boolean;
    loanAppFormPktFormPacketType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppFormPktFields: LoanAppFormPktFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
