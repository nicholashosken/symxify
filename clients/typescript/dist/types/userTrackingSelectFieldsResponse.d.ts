import { UserTracking } from "./userTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserTrackingSelectFieldsResponse {
    userTracking: UserTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
