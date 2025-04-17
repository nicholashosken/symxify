import { Parameter } from "./parameter";
import { VersionType } from "./versionType";
export interface ParameterSelectFieldsFilterChildrenResponse {
    parameter: Parameter;
    version1: VersionType;
    messageId: string;
}
