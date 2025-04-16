import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppFormPktSingleSelectableFields } from "./loanAppFormPktSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppFormPktSelectFieldsRequest {
    loanAppFormPktFormPacketTypeValue: number;
    loanAppFormPktFormPacketTypeValueSpecified: boolean;
    loanAppFormPktFormPacketType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppFormPktSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}