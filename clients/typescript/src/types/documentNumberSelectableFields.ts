import { DocumentNumberFields } from "./documentNumberFields";
import { VersionType } from "./versionType";

export interface DocumentNumberSelectableFields {
    includeAllDocumentNumberFields: boolean | null;
    documentNumberFields: DocumentNumberFields;
    version1: VersionType;
}