import { DeviceInformation } from "./deviceInformation";
import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupByLookupRequest {
    lookupTypeValue: number;
    lookupTypeValueSpecified: boolean;
    lookupType: number | null;
    lookupNumber: string;
    deviceInformation: DeviceInformation;
    credentials: AdminCredentialsChoice;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
