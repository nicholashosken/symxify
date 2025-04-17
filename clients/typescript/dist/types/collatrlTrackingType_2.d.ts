import { CollatrlTrackingTypeUserRate20_2 } from "./collatrlTrackingTypeUserRate20_2";
import { VersionType } from "./versionType";
export interface CollatrlTrackingType_2 {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: CollatrlTrackingTypeUserRate20_2[];
    version1: VersionType;
}
