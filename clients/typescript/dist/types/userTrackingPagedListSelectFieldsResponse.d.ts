import { UserTracking } from "./userTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingPagedListSelectFieldsResponse {
    userTracking: UserTracking[];
    userTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
