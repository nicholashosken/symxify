import { Crs } from "./crs";
import { VersionType } from "./versionType";
export interface CrsSelectFieldsResponse {
    crs: Crs;
    version1: VersionType;
    messageId: string;
}
