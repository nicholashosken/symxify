import { CollatrlTrackingTypeUserRate20 } from "./collatrlTrackingTypeUserRate20";
import { VersionType } from "./versionType";
export interface CollatrlTrackingType {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: CollatrlTrackingTypeUserRate20[];
    version1: VersionType;
}
