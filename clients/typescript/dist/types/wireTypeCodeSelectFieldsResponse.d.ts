import { WireTypeCode } from "./wireTypeCode";
import { VersionType } from "./versionType";
export interface WireTypeCodeSelectFieldsResponse {
    wireTypeCode: WireTypeCode;
    version1: VersionType;
    messageId: string;
}
