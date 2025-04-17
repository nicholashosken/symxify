import { ScreenDefinition } from "./screenDefinition";
import { VersionType } from "./versionType";
export interface ScreenDefinitionSearchPagedSelectFieldsResponse {
    screenDefinition: ScreenDefinition[];
    token: string;
    version1: VersionType;
    messageId: string;
}
