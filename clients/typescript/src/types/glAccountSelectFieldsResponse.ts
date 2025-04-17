import { GlAccount } from "./glAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccountSelectFieldsResponse {
    glAccount: GlAccount;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}