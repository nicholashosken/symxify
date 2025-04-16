import { DocumentNumberFields } from "./documentNumberFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocumentNumberSelectableFields {
    includeAllDocumentNumberFieldsValue: boolean;
    includeAllDocumentNumberFieldsValueSpecified: boolean;
    includeAllDocumentNumberFields: boolean | null;
    documentNumberFields: DocumentNumberFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}