import { VersionType } from "./versionType";
export interface CpLetter {
    description: string;
    letterCode: number | null;
    nextWorkDays: number | null;
    specfile: string;
    version1: VersionType;
}
