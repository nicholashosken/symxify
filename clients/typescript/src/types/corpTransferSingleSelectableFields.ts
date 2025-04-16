import { CorpTransferFields } from "./corpTransferFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CorpTransferSingleSelectableFields {
    includeAllCorpTransferFieldsValue: boolean;
    includeAllCorpTransferFieldsValueSpecified: boolean;
    includeAllCorpTransferFields: boolean | null;
    corpTransferFields: CorpTransferFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}