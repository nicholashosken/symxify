import { VersionType } from "./versionType";
export interface GlCode {
    brXlate: number | null;
    description: string;
    primaryGlCode: number | null;
    xlateCount: number | null;
    xlateDetail: number | null;
    xlateGroup: number | null;
    xlateType: number | null;
    version1: VersionType;
}
