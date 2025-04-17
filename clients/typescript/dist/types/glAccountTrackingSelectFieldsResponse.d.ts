import { GlAccountTracking } from "./glAccountTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlAccountTrackingSelectFieldsResponse {
    glAccountTracking: GlAccountTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
