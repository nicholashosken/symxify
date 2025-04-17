import { CtrNote } from "./ctrNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrNotePagedListSelectFieldsResponse {
    ctrNote: CtrNote[];
    ctrNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
