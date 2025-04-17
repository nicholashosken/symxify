import { WireServiceMessage } from "./wireServiceMessage";
import { VersionType } from "./versionType";
export interface WireServiceMessagePagedListSelectFieldsResponse {
    wireServiceMessage: WireServiceMessage[];
    token: string;
    version1: VersionType;
    messageId: string;
}
