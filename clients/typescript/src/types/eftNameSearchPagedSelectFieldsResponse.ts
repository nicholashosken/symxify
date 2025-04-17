import { EftName } from "./eftName";
import { VersionType } from "./versionType";

export interface EftNameSearchPagedSelectFieldsResponse {
    eftName: EftName[];
    token: string;
    version1: VersionType;
    messageId: string;
}