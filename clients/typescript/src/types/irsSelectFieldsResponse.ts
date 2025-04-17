import { Irs } from "./irs";
import { VersionType } from "./versionType";

export interface IrsSelectFieldsResponse {
    irs: Irs;
    version1: VersionType;
    messageId: string;
}