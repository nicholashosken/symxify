import { Eft } from "./eft";
import { VersionType } from "./versionType";

export interface EftSearchPagedSelectFieldsResponse {
    eft: Eft[];
    token: string;
    version1: VersionType;
    messageId: string;
}