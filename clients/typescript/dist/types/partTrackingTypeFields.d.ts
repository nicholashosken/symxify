import { VersionType } from "./versionType";
export interface PartTrackingTypeFields {
    description: boolean | null;
    parentClosingOption: boolean | null;
    recordSelection: boolean | null;
    trackingType: boolean | null;
    userRate20: number[];
    version1: VersionType;
}
