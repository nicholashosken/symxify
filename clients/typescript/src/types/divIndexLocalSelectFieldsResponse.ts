import { DivIndexLocal } from "./divIndexLocal";
import { VersionType } from "./versionType";

export interface DivIndexLocalSelectFieldsResponse {
    divIndexLocal: DivIndexLocal;
    version1: VersionType;
    messageId: string;
}