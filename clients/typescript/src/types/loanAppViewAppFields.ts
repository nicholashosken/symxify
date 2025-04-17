import { VersionType } from "./versionType";

export interface LoanAppViewAppFields {
    applicationType: boolean | null;
    specfile: boolean | null;
    version1: VersionType;
}