import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlCodeFields {
    brXlateValue: boolean;
    brXlateValueSpecified: boolean;
    brXlate: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    primaryGlCodeValue: boolean;
    primaryGlCodeValueSpecified: boolean;
    primaryGlCode: boolean | null;
    xlateCountValue: boolean;
    xlateCountValueSpecified: boolean;
    xlateCount: boolean | null;
    xlateDetailValue: boolean;
    xlateDetailValueSpecified: boolean;
    xlateDetail: boolean | null;
    xlateGroupValue: boolean;
    xlateGroupValueSpecified: boolean;
    xlateGroup: boolean | null;
    xlateTypeValue: boolean;
    xlateTypeValueSpecified: boolean;
    xlateType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}