import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MemberRecFields_2 } from "./memberRecFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateMemberRecByIdRequest {
    memberRecMemberNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    memberRecFields: MemberRecFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}