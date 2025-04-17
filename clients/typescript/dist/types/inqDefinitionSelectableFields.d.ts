import { InqDefinitionFields } from "./inqDefinitionFields";
import { VersionType } from "./versionType";
export interface InqDefinitionSelectableFields {
    includeAllInqDefinitionFields: boolean | null;
    inqDefinitionFields: InqDefinitionFields;
    version1: VersionType;
}
