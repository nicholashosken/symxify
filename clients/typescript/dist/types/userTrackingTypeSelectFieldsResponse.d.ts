import { UserTrackingType } from "./userTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingTypeSelectFieldsResponse {
    userTrackingType: UserTrackingType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
