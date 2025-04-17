import { IntIndex } from "./intIndex";
import { VersionType } from "./versionType";
export interface IntIndexPagedListSelectFieldsResponse {
    intIndex: IntIndex[];
    token: string;
    version1: VersionType;
    messageId: string;
}
