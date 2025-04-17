import { DivIndexLocal } from "./divIndexLocal";
import { VersionType } from "./versionType";
export interface DivIndexLocalPagedListSelectFieldsResponse {
    divIndexLocal: DivIndexLocal[];
    token: string;
    version1: VersionType;
    messageId: string;
}
