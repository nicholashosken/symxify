import { CdmCommon } from "./cdmCommon";
import { VersionType } from "./versionType";
export interface CdmCommonSelectFieldsResponse {
    cdmCommon: CdmCommon;
    version1: VersionType;
    messageId: string;
}
