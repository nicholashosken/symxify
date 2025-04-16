import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareDefaultFields_2 } from "./shareDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareDefaultByIdRequest {
    shareDefaultShareTypeValue: number;
    shareDefaultShareTypeValueSpecified: boolean;
    shareDefaultShareType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    shareDefaultFields: ShareDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
