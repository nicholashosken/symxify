import { VersionType } from "./versionType";

export interface LoanAppVerFormFields {
    verForm: boolean | null;
    verFormDescription: boolean | null;
    verFormSpecfile: boolean | null;
    version1: VersionType;
}