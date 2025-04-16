import { CardWiz } from "./cardWiz";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardWizSelectFieldsResponse {
    cardWiz: CardWiz;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
