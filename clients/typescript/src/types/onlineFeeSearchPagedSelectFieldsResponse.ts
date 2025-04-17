import { OnlineFee } from "./onlineFee";
import { VersionType } from "./versionType";

export interface OnlineFeeSearchPagedSelectFieldsResponse {
    onlineFee: OnlineFee[];
    token: string;
    version1: VersionType;
    messageId: string;
}