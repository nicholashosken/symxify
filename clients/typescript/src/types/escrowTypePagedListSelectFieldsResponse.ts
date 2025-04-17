import { EscrowType } from "./escrowType";
import { VersionType } from "./versionType";

export interface EscrowTypePagedListSelectFieldsResponse {
    escrowType: EscrowType[];
    token: string;
    version1: VersionType;
    messageId: string;
}