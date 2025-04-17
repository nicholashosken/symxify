import { IntIndex } from "./intIndex";
import { VersionType } from "./versionType";

export interface IntIndexSelectFieldsResponse {
    intIndex: IntIndex;
    version1: VersionType;
    messageId: string;
}