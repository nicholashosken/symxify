import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCodes {
    clearingCodeValue: number;
    clearingCodeValueSpecified: boolean;
    clearingCode: number | null;
    checkDisbursedCodeValue: number;
    checkDisbursedCodeValueSpecified: boolean;
    checkDisbursedCode: number | null;
    externalCodeValue: number;
    externalCodeValueSpecified: boolean;
    externalCode: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
