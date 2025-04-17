import { ExcpItem } from "./excpItem";
import { VersionType } from "./versionType";

export interface ExcpItemSelectFieldsResponse {
    excpItem: ExcpItem;
    version1: VersionType;
    messageId: string;
}