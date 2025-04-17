import { VersionType } from "./versionType";

export interface AnalysisFloatFields {
    branch: boolean | null;
    branchReference: boolean | null;
    branchValidCode: boolean | null;
    foreignItemFloatDays: boolean | null;
    localFloatDays: boolean | null;
    nonlocalFloatDays: boolean | null;
    routingNumberFloatDays: number[];
    routingNumberPrefix: number[];
    version1: VersionType;
}