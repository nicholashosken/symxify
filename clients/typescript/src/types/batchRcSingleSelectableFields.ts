import { BatchRcFields } from "./batchRcFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchRcSingleSelectableFields {
    includeAllBatchRcFieldsValue: boolean;
    includeAllBatchRcFieldsValueSpecified: boolean;
    includeAllBatchRcFields: boolean | null;
    batchRcFields: BatchRcFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}