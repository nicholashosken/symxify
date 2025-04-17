import { Wire } from "./wire";
import { VersionType } from "./versionType";

export interface WireSelectFieldsFilterChildrenResponse {
    wire: Wire;
    version1: VersionType;
    messageId: string;
}