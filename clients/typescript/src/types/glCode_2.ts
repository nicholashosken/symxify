import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlCode_2 {
    brXlateValue: number;
    brXlateValueSpecified: boolean;
    brXlate: number | null;
    description: string;
    primaryGlCodeValue: number;
    primaryGlCodeValueSpecified: boolean;
    primaryGlCode: number | null;
    xlateCountValue: number;
    xlateCountValueSpecified: boolean;
    xlateCount: number | null;
    xlateDetailValue: number;
    xlateDetailValueSpecified: boolean;
    xlateDetail: number | null;
    xlateGroupValue: number;
    xlateGroupValueSpecified: boolean;
    xlateGroup: number | null;
    xlateTypeValue: number;
    xlateTypeValueSpecified: boolean;
    xlateType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}