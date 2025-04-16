import { AnalysisFloatRoutingNumberFloatDays_2 } from "./analysisFloatRoutingNumberFloatDays_2";
import { AnalysisFloatRoutingNumberPrefix_2 } from "./analysisFloatRoutingNumberPrefix_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisFloat_2 {
    branchValue: number;
    branchValueSpecified: boolean;
    branch: number | null;
    branchReferenceValue: number;
    branchReferenceValueSpecified: boolean;
    branchReference: number | null;
    branchValidCodeValue: number;
    branchValidCodeValueSpecified: boolean;
    branchValidCode: number | null;
    foreignItemFloatDaysValue: number;
    foreignItemFloatDaysValueSpecified: boolean;
    foreignItemFloatDays: number | null;
    localFloatDaysValue: number;
    localFloatDaysValueSpecified: boolean;
    localFloatDays: number | null;
    nonlocalFloatDaysValue: number;
    nonlocalFloatDaysValueSpecified: boolean;
    nonlocalFloatDays: number | null;
    routingNumberFloatDays: AnalysisFloatRoutingNumberFloatDays_2[];
    routingNumberFloatDaysSpecified: boolean;
    routingNumberPrefix: AnalysisFloatRoutingNumberPrefix_2[];
    routingNumberPrefixSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}