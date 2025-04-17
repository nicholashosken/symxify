import { PartTrackingTypeUserRate20_2 } from "./partTrackingTypeUserRate20_2";
import { VersionType } from "./versionType";

export interface PartTrackingType_2 {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: PartTrackingTypeUserRate20_2[];
    version1: VersionType;
}