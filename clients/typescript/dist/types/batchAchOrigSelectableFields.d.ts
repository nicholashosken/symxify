import { BatchAchOrigFields } from "./batchAchOrigFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface BatchAchOrigSelectableFields {
    includeAllBatchAchOrigFieldsValue: boolean;
    includeAllBatchAchOrigFieldsValueSpecified: boolean;
    includeAllBatchAchOrigFields: boolean | null;
    batchAchOrigFields: BatchAchOrigFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
