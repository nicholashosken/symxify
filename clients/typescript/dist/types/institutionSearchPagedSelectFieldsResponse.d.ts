import { Institution } from "./institution";
import { VersionType } from "./versionType";
export interface InstitutionSearchPagedSelectFieldsResponse {
    institution: Institution[];
    token: string;
    version1: VersionType;
    messageId: string;
}
