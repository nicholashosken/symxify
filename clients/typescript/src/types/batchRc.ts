import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchRc {
    batchReturnCodeValue: number;
    batchReturnCodeValueSpecified: boolean;
    batchReturnCode: number | null;
    batchReturnCodeDefinedTypeValue: number;
    batchReturnCodeDefinedTypeValueSpecified: boolean;
    batchReturnCodeDefinedType: number | null;
    batchReturnCodeDescription: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}