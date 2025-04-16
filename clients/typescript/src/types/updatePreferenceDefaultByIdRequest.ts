import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceDefaultFields_2 } from "./preferenceDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdatePreferenceDefaultByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    preferenceDefaultFields: PreferenceDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}