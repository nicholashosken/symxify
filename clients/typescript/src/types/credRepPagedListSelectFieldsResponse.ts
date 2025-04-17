import { CredRep } from "./credRep";
import { VersionType } from "./versionType";

export interface CredRepPagedListSelectFieldsResponse {
    credRep: CredRep[];
    token: string;
    version1: VersionType;
    messageId: string;
}