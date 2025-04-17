import { Tpt } from "./tpt";
import { VersionType } from "./versionType";

export interface TptSearchPagedSelectFieldsResponse {
    tpt: Tpt[];
    token: string;
    version1: VersionType;
    messageId: string;
}