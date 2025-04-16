import { CollatrlTrackingType } from "./collatrlTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollatrlTrackingTypeSelectFieldsResponse {
    collatrlTrackingType: CollatrlTrackingType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
