import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctMembGrpDescFields_2 } from "./acctMembGrpDescFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateAcctMembGrpDescByIdRequest {
    acctMembGrpDescMemberGroupValue: number;
    acctMembGrpDescMemberGroupValueSpecified: boolean;
    acctMembGrpDescMemberGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acctMembGrpDescFields: AcctMembGrpDescFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}