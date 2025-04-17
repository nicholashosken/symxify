import { ScreenDefinition } from "./screenDefinition";
import { VersionType } from "./versionType";

export interface ScreenDefinitionSelectFieldsResponse {
    screenDefinition: ScreenDefinition;
    version1: VersionType;
    messageId: string;
}