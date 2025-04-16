import { ShareTracking } from "./shareTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareTrackingSelectFieldsResponse {
    shareTracking: ShareTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}