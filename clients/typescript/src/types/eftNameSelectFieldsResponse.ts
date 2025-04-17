import { EftName } from "./eftName";
import { VersionType } from "./versionType";

export interface EftNameSelectFieldsResponse {
    eftName: EftName;
    version1: VersionType;
    messageId: string;
}