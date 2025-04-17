import { VersionType } from "./versionType";

export interface GlTableFields {
    amount: number[];
    description: boolean | null;
    glAccount: number[];
    glTableType: boolean | null;
    negative: number[];
    percent: number[];
    usageCode: boolean | null;
    version1: VersionType;
}