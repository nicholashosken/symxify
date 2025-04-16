import { AccountFieldName } from "./accountFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AccountFieldNamePagedListSelectFieldsResponse {
    accountFieldName: AccountFieldName[];
    accountFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}