import { AcsService } from "./acsService";
import { VersionType } from "./versionType";

export interface AcsServiceSelectFieldsResponse {
    acsService: AcsService;
    version1: VersionType;
    messageId: string;
}