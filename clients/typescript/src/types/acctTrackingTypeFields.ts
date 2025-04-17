import { VersionType } from "./versionType";

export interface AcctTrackingTypeFields {
    description: boolean | null;
    field: number[];
    parentClosingOption: boolean | null;
    recordSelection: boolean | null;
    trackingType: boolean | null;
    version1: VersionType;
}