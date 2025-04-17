import { GlAccountTracking } from "./glAccountTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlAccountTrackingSearchPagedSelectFieldsResponse {
    glAccountTracking: GlAccountTracking[];
    glAccountTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
