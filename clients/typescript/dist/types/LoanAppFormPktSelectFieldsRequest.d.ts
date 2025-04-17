import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFormPktSingleSelectableFields } from "./loanAppFormPktSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppFormPktSelectFieldsRequest {
    loanAppFormPktFormPacketType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppFormPktSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
