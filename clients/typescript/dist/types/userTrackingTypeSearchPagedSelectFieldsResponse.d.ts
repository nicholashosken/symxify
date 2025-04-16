import { UserTrackingType } from "./userTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingTypeSearchPagedSelectFieldsResponse {
    userTrackingType: UserTrackingType[];
    userTrackingTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
