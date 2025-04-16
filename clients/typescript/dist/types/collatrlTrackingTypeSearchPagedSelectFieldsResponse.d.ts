import { CollatrlTrackingType } from "./collatrlTrackingType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollatrlTrackingTypeSearchPagedSelectFieldsResponse {
    collatrlTrackingType: CollatrlTrackingType[];
    collatrlTrackingTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
