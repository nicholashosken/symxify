import { WireServiceMessage } from "./wireServiceMessage";
import { VersionType } from "./versionType";

export interface WireServiceMessageSelectFieldsResponse {
    wireServiceMessage: WireServiceMessage;
    version1: VersionType;
    messageId: string;
}