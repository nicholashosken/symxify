import { DivIndexLocal } from "./divIndexLocal";
import { VersionType } from "./versionType";

export interface DivIndexLocalSearchPagedSelectFieldsResponse {
    divIndexLocal: DivIndexLocal[];
    token: string;
    version1: VersionType;
    messageId: string;
}