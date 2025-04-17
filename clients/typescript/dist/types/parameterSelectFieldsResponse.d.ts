import { Parameter } from "./parameter";
import { VersionType } from "./versionType";
export interface ParameterSelectFieldsResponse {
    parameter: Parameter;
    version1: VersionType;
    messageId: string;
}
