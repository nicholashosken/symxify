import { EftTransfer } from "./eftTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftTransferSelectFieldsResponse {
    eftTransfer: EftTransfer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
