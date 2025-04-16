import { ExternalLoanNote } from "./externalLoanNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanNoteSelectFieldsResponse {
    externalLoanNote: ExternalLoanNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}