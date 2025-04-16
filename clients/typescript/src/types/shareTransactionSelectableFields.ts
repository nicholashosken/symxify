import { ShareTransactionFields } from "./shareTransactionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareTransactionSelectableFields {
    includeAllShareTransactionFieldsValue: boolean;
    includeAllShareTransactionFieldsValueSpecified: boolean;
    includeAllShareTransactionFields: boolean | null;
    shareTransactionFields: ShareTransactionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}