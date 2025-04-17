import { CredRep } from "./credRep";
import { VersionType } from "./versionType";

export interface CredRepSelectFieldsFilterChildrenResponse {
    credRep: CredRep;
    version1: VersionType;
    messageId: string;
}