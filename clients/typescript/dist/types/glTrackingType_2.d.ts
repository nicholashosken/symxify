import { GlTrackingTypeUserRate20_2 } from "./glTrackingTypeUserRate20_2";
import { VersionType } from "./versionType";
export interface GlTrackingType_2 {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: GlTrackingTypeUserRate20_2[];
    version1: VersionType;
}
