import { ExternalAccount } from "./externalAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalAccountPagedListSelectFieldsResponse {
    externalAccount: ExternalAccount[];
    externalAccountSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}