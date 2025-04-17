import { VersionType } from "./versionType";
export interface LoanAppViewApp {
    applicationType: number | null;
    specfile: string;
    version1: VersionType;
}
