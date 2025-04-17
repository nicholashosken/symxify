import { InqDefinition } from "./inqDefinition";
import { VersionType } from "./versionType";

export interface InqDefinitionPagedListSelectFieldsResponse {
    inqDefinition: InqDefinition[];
    token: string;
    version1: VersionType;
    messageId: string;
}