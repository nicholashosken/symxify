import { VersionType } from "./versionType";

export interface TrackingCodeFields {
    code: boolean | null;
    description: boolean | null;
    version1: VersionType;
}