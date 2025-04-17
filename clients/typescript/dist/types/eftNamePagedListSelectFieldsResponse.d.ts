import { EftName } from "./eftName";
import { VersionType } from "./versionType";
export interface EftNamePagedListSelectFieldsResponse {
    eftName: EftName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
