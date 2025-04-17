import { WdFee } from "./wdFee";
import { VersionType } from "./versionType";

export interface WdFeeSearchPagedSelectFieldsResponse {
    wdFee: WdFee[];
    token: string;
    version1: VersionType;
    messageId: string;
}