import { WdFee } from "./wdFee";
import { VersionType } from "./versionType";
export interface WdFeeSelectFieldsResponse {
    wdFee: WdFee;
    version1: VersionType;
    messageId: string;
}
