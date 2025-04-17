import { ExcpItem } from "./excpItem";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpItemSelectFieldsResponse {
    excpItem: ExcpItem;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
