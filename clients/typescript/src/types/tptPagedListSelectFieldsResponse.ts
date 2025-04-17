import { Tpt } from "./tpt";
import { VersionType } from "./versionType";

export interface TptPagedListSelectFieldsResponse {
    tpt: Tpt[];
    token: string;
    version1: VersionType;
    messageId: string;
}