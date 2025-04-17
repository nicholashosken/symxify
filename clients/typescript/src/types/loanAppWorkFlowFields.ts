import { VersionType } from "./versionType";

export interface LoanAppWorkFlowFields {
    applicationType: boolean | null;
    event: number[];
    version1: VersionType;
}