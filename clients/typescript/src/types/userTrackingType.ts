import { UserTrackingTypeUserRate20 } from "./userTrackingTypeUserRate20";
import { VersionType } from "./versionType";

export interface UserTrackingType {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: UserTrackingTypeUserRate20[];
    version1: VersionType;
}