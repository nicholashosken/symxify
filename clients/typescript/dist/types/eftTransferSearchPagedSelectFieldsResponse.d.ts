import { EftTransfer } from "./eftTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftTransferSearchPagedSelectFieldsResponse {
    eftTransfer: EftTransfer[];
    eftTransferSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
