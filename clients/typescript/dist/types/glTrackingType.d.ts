import { GlTrackingTypeUserRate20 } from "./glTrackingTypeUserRate20";
import { VersionType } from "./versionType";
export interface GlTrackingType {
    description: string;
    parentClosingOption: boolean | null;
    recordSelection: number | null;
    trackingType: number | null;
    userRate20: GlTrackingTypeUserRate20[];
    version1: VersionType;
}
