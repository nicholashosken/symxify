import { EscrowType } from "./escrowType";
import { VersionType } from "./versionType";

export interface EscrowTypeSelectFieldsResponse {
    escrowType: EscrowType;
    version1: VersionType;
    messageId: string;
}