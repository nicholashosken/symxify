import { DocumentNumber } from "./documentNumber";
import { VersionType } from "./versionType";

export interface DocumentNumberSelectFieldsResponse {
    documentNumber: DocumentNumber;
    version1: VersionType;
    messageId: string;
}