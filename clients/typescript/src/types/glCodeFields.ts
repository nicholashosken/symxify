import { VersionType } from "./versionType";

export interface GlCodeFields {
    brXlate: boolean | null;
    description: boolean | null;
    primaryGlCode: boolean | null;
    xlateCount: boolean | null;
    xlateDetail: boolean | null;
    xlateGroup: boolean | null;
    xlateType: boolean | null;
    version1: VersionType;
}