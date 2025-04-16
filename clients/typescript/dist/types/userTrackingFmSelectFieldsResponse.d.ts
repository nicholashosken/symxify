import { UserTrackingFm } from "./userTrackingFm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingFmSelectFieldsResponse {
    userTrackingFm: UserTrackingFm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
