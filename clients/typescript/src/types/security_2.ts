import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Security_2 {
    attemptRecordCodeValue: number;
    attemptRecordCodeValueSpecified: boolean;
    attemptRecordCode: number | null;
    description: string;
    eventLogCodeValue: number;
    eventLogCodeValueSpecified: boolean;
    eventLogCode: number | null;
    levelValue: number;
    levelValueSpecified: boolean;
    level: number | null;
    recordSelectionValue: number;
    recordSelectionValueSpecified: boolean;
    recordSelection: number | null;
    securityCategoryValue: number;
    securityCategoryValueSpecified: boolean;
    securityCategory: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}