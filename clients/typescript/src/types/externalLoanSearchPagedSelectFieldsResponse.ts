import { ExternalLoan } from "./externalLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanSearchPagedSelectFieldsResponse {
    externalLoan: ExternalLoan[];
    externalLoanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}