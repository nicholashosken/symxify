import { CorpTransfer } from "./corpTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CorpTransferSelectFieldsResponse {
    corpTransfer: CorpTransfer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
