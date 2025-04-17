import { VersionType } from "./versionType";
export interface TrackingCode {
    code: number | null;
    description: string;
    version1: VersionType;
}
