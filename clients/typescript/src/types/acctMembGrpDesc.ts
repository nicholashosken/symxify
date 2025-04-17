import { VersionType } from "./versionType";

export interface AcctMembGrpDesc {
    description: string;
    memberGroup: number | null;
    version1: VersionType;
}