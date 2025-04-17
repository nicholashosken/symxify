import { AcsService } from "./acsService";
import { VersionType } from "./versionType";

export interface AcsServiceSearchPagedSelectFieldsResponse {
    acsService: AcsService[];
    token: string;
    version1: VersionType;
    messageId: string;
}