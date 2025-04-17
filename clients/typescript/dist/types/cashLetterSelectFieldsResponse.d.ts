import { CashLetter } from "./cashLetter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CashLetterSelectFieldsResponse {
    cashLetter: CashLetter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
