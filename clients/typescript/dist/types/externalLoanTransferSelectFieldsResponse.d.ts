import { ExternalLoanTransfer } from "./externalLoanTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanTransferSelectFieldsResponse {
    externalLoanTransfer: ExternalLoanTransfer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
