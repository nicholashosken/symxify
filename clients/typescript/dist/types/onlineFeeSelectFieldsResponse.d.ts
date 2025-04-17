import { OnlineFee } from "./onlineFee";
import { VersionType } from "./versionType";
export interface OnlineFeeSelectFieldsResponse {
    onlineFee: OnlineFee;
    version1: VersionType;
    messageId: string;
}
