import { InqDefinition } from "./inqDefinition";
import { VersionType } from "./versionType";
export interface InqDefinitionSelectFieldsResponse {
    inqDefinition: InqDefinition;
    version1: VersionType;
    messageId: string;
}
