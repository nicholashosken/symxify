import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MiscPmtFields_2 } from "./miscPmtFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateMiscPmtByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    miscPmtFields: MiscPmtFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}