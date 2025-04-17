import { Irs } from "./irs";
import { VersionType } from "./versionType";

export interface IrsSearchPagedSelectFieldsResponse {
    irs: Irs[];
    token: string;
    version1: VersionType;
    messageId: string;
}