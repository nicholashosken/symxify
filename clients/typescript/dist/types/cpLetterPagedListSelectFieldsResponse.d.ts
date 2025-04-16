import { CpLetter } from "./cpLetter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpLetterPagedListSelectFieldsResponse {
    cpLetter: CpLetter[];
    cpLetterSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
