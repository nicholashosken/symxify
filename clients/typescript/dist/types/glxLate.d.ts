import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlxLate {
    glCodeValue: number;
    glCodeValueSpecified: boolean;
    glCode: number | null;
    glNumber: string;
    glSuffix: string;
    typeListValue: number;
    typeListValueSpecified: boolean;
    typeList: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
