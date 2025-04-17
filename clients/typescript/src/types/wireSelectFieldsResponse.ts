import { Wire } from "./wire";
import { VersionType } from "./versionType";

export interface WireSelectFieldsResponse {
    wire: Wire;
    version1: VersionType;
    messageId: string;
}