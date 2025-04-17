import { UserTrackingTypeUserRate20_2 } from "./userTrackingTypeUserRate20_2";
import { VersionType } from "./versionType";
export interface UserTrackingType_2 {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: UserTrackingTypeUserRate20_2[];
    version1: VersionType;
}
