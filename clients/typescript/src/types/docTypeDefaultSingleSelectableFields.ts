import { DocTypeDefaultFields } from "./docTypeDefaultFields";
import { VersionType } from "./versionType";

export interface DocTypeDefaultSingleSelectableFields {
    includeAllDocTypeDefaultFields: boolean | null;
    docTypeDefaultFields: DocTypeDefaultFields;
    version1: VersionType;
}