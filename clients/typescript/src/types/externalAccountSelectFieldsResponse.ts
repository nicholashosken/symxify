import { ExternalAccount } from "./externalAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalAccountSelectFieldsResponse {
    externalAccount: ExternalAccount;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}