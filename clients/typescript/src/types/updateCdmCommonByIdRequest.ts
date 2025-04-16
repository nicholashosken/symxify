import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmCommonFields_2 } from "./cdmCommonFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCdmCommonByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cdmCommonFields: CdmCommonFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}