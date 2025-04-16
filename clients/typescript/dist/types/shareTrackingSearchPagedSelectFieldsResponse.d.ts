import { ShareTracking } from "./shareTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareTrackingSearchPagedSelectFieldsResponse {
    shareTracking: ShareTracking[];
    shareTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
