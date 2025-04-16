import { ExternalLoan } from "./externalLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanSelectFieldsFilterChildrenResponse {
    externalLoan: ExternalLoan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}