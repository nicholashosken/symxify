import { InqDefinitionFields } from "./inqDefinitionFields";
import { VersionType } from "./versionType";
export interface InqDefinitionSingleSelectableFields {
    includeAllInqDefinitionFields: boolean | null;
    inqDefinitionFields: InqDefinitionFields;
    version1: VersionType;
}
