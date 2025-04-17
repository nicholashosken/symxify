import { Irs } from "./irs";
import { VersionType } from "./versionType";
export interface IrsPagedListSelectFieldsResponse {
    irs: Irs[];
    token: string;
    version1: VersionType;
    messageId: string;
}
