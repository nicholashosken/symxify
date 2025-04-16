import { ShareTransfer } from "./shareTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareTransferSelectFieldsResponse {
    shareTransfer: ShareTransfer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}