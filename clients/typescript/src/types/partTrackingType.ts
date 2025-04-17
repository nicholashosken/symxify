import { PartTrackingTypeUserRate20 } from "./partTrackingTypeUserRate20";
import { VersionType } from "./versionType";

export interface PartTrackingType {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: PartTrackingTypeUserRate20[];
    version1: VersionType;
}