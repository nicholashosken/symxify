import { IntIndex } from "./intIndex";
import { VersionType } from "./versionType";

export interface IntIndexSearchPagedSelectFieldsResponse {
    intIndex: IntIndex[];
    token: string;
    version1: VersionType;
    messageId: string;
}