import { Check } from "./check";
import { VersionType } from "./versionType";
export interface CheckSelectFieldsFilterChildrenResponse {
    check: Check;
    version1: VersionType;
    messageId: string;
}
