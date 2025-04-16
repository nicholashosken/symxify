import { DocumentNumber } from "./documentNumber";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocumentNumberSelectFieldsResponse {
    documentNumber: DocumentNumber;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}