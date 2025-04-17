import { AcsService } from "./acsService";
import { VersionType } from "./versionType";
export interface AcsServicePagedListSelectFieldsResponse {
    acsService: AcsService[];
    token: string;
    version1: VersionType;
    messageId: string;
}
