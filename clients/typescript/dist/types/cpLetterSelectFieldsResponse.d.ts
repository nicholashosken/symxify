import { CpLetter } from "./cpLetter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpLetterSelectFieldsResponse {
    cpLetter: CpLetter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
