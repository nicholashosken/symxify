import { Ctr } from "./ctr";
import { VersionType } from "./versionType";

export interface CtrSelectFieldsResponse {
    ctr: Ctr;
    version1: VersionType;
    messageId: string;
}