import { ExcpItem } from "./excpItem";
import { VersionType } from "./versionType";

export interface ExcpItemSelectFieldsFilterChildrenResponse {
    excpItem: ExcpItem;
    version1: VersionType;
    messageId: string;
}