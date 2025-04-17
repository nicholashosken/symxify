import { Institution } from "./institution";
import { VersionType } from "./versionType";
export interface InstitutionPagedListSelectFieldsResponse {
    institution: Institution[];
    token: string;
    version1: VersionType;
    messageId: string;
}
