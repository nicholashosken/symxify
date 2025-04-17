import { Check } from "./check";
import { VersionType } from "./versionType";

export interface CheckSelectFieldsResponse {
    check: Check;
    version1: VersionType;
    messageId: string;
}