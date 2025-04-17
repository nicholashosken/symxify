import { CtrNote } from "./ctrNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrNoteSelectFieldsResponse {
    ctrNote: CtrNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
