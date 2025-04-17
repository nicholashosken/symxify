import { ParameterFields } from "./parameterFields";
import { VersionType } from "./versionType";
export interface ParameterSingleSelectableFields {
    includeAllParameterFields: boolean | null;
    parameterFields: ParameterFields;
    version1: VersionType;
}
