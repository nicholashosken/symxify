import { VersionType } from "./versionType";

export interface GlTrackingTypeFields {
    description: boolean | null;
    parentClosingOption: boolean | null;
    recordSelection: boolean | null;
    trackingType: boolean | null;
    userRate20: number[];
    version1: VersionType;
}