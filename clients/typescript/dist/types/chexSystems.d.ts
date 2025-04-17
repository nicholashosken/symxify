import { VersionType } from "./versionType";
export interface ChexSystems {
    includeNewAccountChex: boolean | null;
    includeQualiFile: boolean | null;
    includeIdVerification: boolean | null;
    includeOfacWatch: boolean | null;
    version1: VersionType;
}
