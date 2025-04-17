import { AnalysisFloatRoutingNumberFloatDays_2 } from "./analysisFloatRoutingNumberFloatDays_2";
import { AnalysisFloatRoutingNumberPrefix_2 } from "./analysisFloatRoutingNumberPrefix_2";
import { VersionType } from "./versionType";

export interface AnalysisFloat_2 {
    branch: number | null;
    branchReference: number | null;
    branchValidCode: number | null;
    foreignItemFloatDays: number | null;
    localFloatDays: number | null;
    nonlocalFloatDays: number | null;
    routingNumberFloatDays: AnalysisFloatRoutingNumberFloatDays_2[];
    routingNumberPrefix: AnalysisFloatRoutingNumberPrefix_2[];
    version1: VersionType;
}