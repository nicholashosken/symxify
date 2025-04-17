import { WdFee } from "./wdFee";
import { VersionType } from "./versionType";

export interface WdFeePagedListSelectFieldsResponse {
    wdFee: WdFee[];
    token: string;
    version1: VersionType;
    messageId: string;
}