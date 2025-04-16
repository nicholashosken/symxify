import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CdmFields_2 } from "./cdmFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCdmByIdRequest {
    cdmCdmValue: number;
    cdmCdmValueSpecified: boolean;
    cdmCdm: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    cdmFields: CdmFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}