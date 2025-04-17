import { Eft } from "./eft";
import { VersionType } from "./versionType";

export interface EftPagedListSelectFieldsResponse {
    eft: Eft[];
    token: string;
    version1: VersionType;
    messageId: string;
}