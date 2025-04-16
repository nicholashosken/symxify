import { ExternalLoanNote } from "./externalLoanNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanNotePagedListSelectFieldsResponse {
    externalLoanNote: ExternalLoanNote[];
    externalLoanNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
