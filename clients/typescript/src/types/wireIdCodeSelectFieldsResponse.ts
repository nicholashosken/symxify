import { WireIdCode } from "./wireIdCode";
import { VersionType } from "./versionType";

export interface WireIdCodeSelectFieldsResponse {
    wireIdCode: WireIdCode;
    version1: VersionType;
    messageId: string;
}