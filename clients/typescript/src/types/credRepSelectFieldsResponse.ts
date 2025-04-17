import { CredRep } from "./credRep";
import { VersionType } from "./versionType";

export interface CredRepSelectFieldsResponse {
    credRep: CredRep;
    version1: VersionType;
    messageId: string;
}