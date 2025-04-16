import { CredRepItem } from "./credRepItem";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CredRepItemPagedListSelectFieldsResponse {
    credRepItem: CredRepItem[];
    credRepItemSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}