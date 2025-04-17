import { AnalysisFloatRoutingNumberFloatDays } from "./analysisFloatRoutingNumberFloatDays";
import { AnalysisFloatRoutingNumberPrefix } from "./analysisFloatRoutingNumberPrefix";
import { VersionType } from "./versionType";

export interface AnalysisFloat {
    branch: number | null;
    branchReference: number | null;
    branchValidCode: number | null;
    foreignItemFloatDays: number | null;
    localFloatDays: number | null;
    nonlocalFloatDays: number | null;
    routingNumberFloatDays: AnalysisFloatRoutingNumberFloatDays[];
    routingNumberPrefix: AnalysisFloatRoutingNumberPrefix[];
    version1: VersionType;
}