import { DeviceInformation } from "./deviceInformation";
import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupBySsnRequest {
    ssn: string;
    deviceInformation: DeviceInformation;
    credentials: AdminCredentialsChoice;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}