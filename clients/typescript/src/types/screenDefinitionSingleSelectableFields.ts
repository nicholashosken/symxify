import { ScreenDefinitionFields } from "./screenDefinitionFields";
import { VersionType } from "./versionType";

export interface ScreenDefinitionSingleSelectableFields {
    includeAllScreenDefinitionFields: boolean | null;
    screenDefinitionFields: ScreenDefinitionFields;
    version1: VersionType;
}