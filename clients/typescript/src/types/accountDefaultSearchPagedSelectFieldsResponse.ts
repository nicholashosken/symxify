import { AccountDefault } from "./accountDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AccountDefaultSearchPagedSelectFieldsResponse {
    accountDefault: AccountDefault[];
    accountDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}