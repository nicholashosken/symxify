import { AccountFieldName } from "./accountFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AccountFieldNameSelectFieldsResponse {
    accountFieldName: AccountFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
