import { VersionType } from "./versionType";
export interface WorkFlowRepGen {
    specfile: number | null;
    specfileDescription: string;
    specfileName: string;
    version1: VersionType;
}
