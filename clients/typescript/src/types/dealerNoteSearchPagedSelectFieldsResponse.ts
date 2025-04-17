import { DealerNote } from "./dealerNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerNoteSearchPagedSelectFieldsResponse {
    dealerNote: DealerNote[];
    dealerNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}