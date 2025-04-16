import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlxLateFields {
    glCodeValue: boolean;
    glCodeValueSpecified: boolean;
    glCode: boolean | null;
    glNumberValue: boolean;
    glNumberValueSpecified: boolean;
    glNumber: boolean | null;
    glSuffixValue: boolean;
    glSuffixValueSpecified: boolean;
    glSuffix: boolean | null;
    typeListValue: boolean;
    typeListValueSpecified: boolean;
    typeList: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
