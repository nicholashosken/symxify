import { AccountDefault } from "./accountDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AccountDefaultSelectFieldsResponse {
    accountDefault: AccountDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
