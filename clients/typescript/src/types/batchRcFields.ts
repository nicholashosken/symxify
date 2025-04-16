import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchRcFields {
    batchReturnCodeValue: boolean;
    batchReturnCodeValueSpecified: boolean;
    batchReturnCode: boolean | null;
    batchReturnCodeDefinedTypeValue: boolean;
    batchReturnCodeDefinedTypeValueSpecified: boolean;
    batchReturnCodeDefinedType: boolean | null;
    batchReturnCodeDescriptionValue: boolean;
    batchReturnCodeDescriptionValueSpecified: boolean;
    batchReturnCodeDescription: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}