import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SecurityFields {
    attemptRecordCodeValue: boolean;
    attemptRecordCodeValueSpecified: boolean;
    attemptRecordCode: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    eventLogCodeValue: boolean;
    eventLogCodeValueSpecified: boolean;
    eventLogCode: boolean | null;
    levelValue: boolean;
    levelValueSpecified: boolean;
    level: boolean | null;
    recordSelectionValue: boolean;
    recordSelectionValueSpecified: boolean;
    recordSelection: boolean | null;
    securityCategoryValue: boolean;
    securityCategoryValueSpecified: boolean;
    securityCategory: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
