import { IntType } from "./intType";
import { VersionType } from "./versionType";

export interface IntTypeSelectFieldsResponse {
    intType: IntType;
    version1: VersionType;
    messageId: string;
}