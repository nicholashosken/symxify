import { VersionType } from "./versionType";
export interface WorkFlowRepGenFields {
    specfile: boolean | null;
    specfileDescription: boolean | null;
    specfileName: boolean | null;
    version1: VersionType;
}
