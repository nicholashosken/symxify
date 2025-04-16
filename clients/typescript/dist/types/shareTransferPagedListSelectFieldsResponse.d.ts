import { ShareTransfer } from "./shareTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareTransferPagedListSelectFieldsResponse {
    shareTransfer: ShareTransfer[];
    shareTransferSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
