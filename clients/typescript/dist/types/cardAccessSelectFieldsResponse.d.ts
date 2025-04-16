import { CardAccess } from "./cardAccess";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CardAccessSelectFieldsResponse {
    cardAccess: CardAccess;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
