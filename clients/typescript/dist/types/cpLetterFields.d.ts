import { VersionType } from "./versionType";
export interface CpLetterFields {
    description: boolean | null;
    letterCode: boolean | null;
    nextWorkDays: boolean | null;
    specfile: boolean | null;
    version1: VersionType;
}
