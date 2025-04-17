import { ScreenDefinitionFields } from "./screenDefinitionFields";
import { VersionType } from "./versionType";
export interface ScreenDefinitionSelectableFields {
    includeAllScreenDefinitionFields: boolean | null;
    screenDefinitionFields: ScreenDefinitionFields;
    version1: VersionType;
}
