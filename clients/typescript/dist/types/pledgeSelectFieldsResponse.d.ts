import { Pledge } from "./pledge";
import { VersionType } from "./versionType";
export interface PledgeSelectFieldsResponse {
    pledge: Pledge;
    version1: VersionType;
    messageId: string;
}
