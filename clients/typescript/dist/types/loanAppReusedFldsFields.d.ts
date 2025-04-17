import { VersionType } from "./versionType";
export interface LoanAppReusedFldsFields {
    applicationType: boolean | null;
    reusedField: number[];
    subField: number[];
    version1: VersionType;
}
