import { CollateralTracking } from "./collateralTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralTrackingSelectFieldsResponse {
    collateralTracking: CollateralTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
