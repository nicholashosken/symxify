import { ExcpItem } from "./excpItem";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpItemSelectFieldsFilterChildrenResponse {
    excpItem: ExcpItem;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}