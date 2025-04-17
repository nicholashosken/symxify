import { DocTypeDefaultFields } from "./docTypeDefaultFields";
import { VersionType } from "./versionType";
export interface DocTypeDefaultSelectableFields {
    includeAllDocTypeDefaultFields: boolean | null;
    docTypeDefaultFields: DocTypeDefaultFields;
    version1: VersionType;
}
