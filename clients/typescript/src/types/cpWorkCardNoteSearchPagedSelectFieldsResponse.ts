import { CpWorkCardNote } from "./cpWorkCardNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpWorkCardNoteSearchPagedSelectFieldsResponse {
    cpWorkCardNote: CpWorkCardNote[];
    cpWorkCardNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}