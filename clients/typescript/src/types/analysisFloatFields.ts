import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisFloatFields {
    branchValue: boolean;
    branchValueSpecified: boolean;
    branch: boolean | null;
    branchReferenceValue: boolean;
    branchReferenceValueSpecified: boolean;
    branchReference: boolean | null;
    branchValidCodeValue: boolean;
    branchValidCodeValueSpecified: boolean;
    branchValidCode: boolean | null;
    foreignItemFloatDaysValue: boolean;
    foreignItemFloatDaysValueSpecified: boolean;
    foreignItemFloatDays: boolean | null;
    localFloatDaysValue: boolean;
    localFloatDaysValueSpecified: boolean;
    localFloatDays: boolean | null;
    nonlocalFloatDaysValue: boolean;
    nonlocalFloatDaysValueSpecified: boolean;
    nonlocalFloatDays: boolean | null;
    routingNumberFloatDays: number[];
    routingNumberFloatDaysSpecified: boolean;
    routingNumberPrefix: number[];
    routingNumberPrefixSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}