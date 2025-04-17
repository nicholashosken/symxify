import { EscrowType } from "./escrowType";
import { VersionType } from "./versionType";
export interface EscrowTypeSearchPagedSelectFieldsResponse {
    escrowType: EscrowType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
