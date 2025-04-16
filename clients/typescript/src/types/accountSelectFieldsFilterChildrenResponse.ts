import { Account } from "./account";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AccountSelectFieldsFilterChildrenResponse {
    account: Account;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}