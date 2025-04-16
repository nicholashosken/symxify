import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctMembGrpDescSingleSelectableFields } from "./acctMembGrpDescSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctMembGrpDescSelectFieldsRequest {
    acctMembGrpDescMemberGroupValue: number;
    acctMembGrpDescMemberGroupValueSpecified: boolean;
    acctMembGrpDescMemberGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctMembGrpDescSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}