import { CardAccess } from "./cardAccess";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardAccessSearchPagedSelectFieldsResponse {
    cardAccess: CardAccess[];
    cardAccessSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}