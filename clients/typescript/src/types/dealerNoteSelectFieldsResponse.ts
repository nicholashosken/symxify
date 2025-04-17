import { DealerNote } from "./dealerNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerNoteSelectFieldsResponse {
    dealerNote: DealerNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}