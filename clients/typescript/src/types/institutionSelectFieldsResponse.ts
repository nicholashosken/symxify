import { Institution } from "./institution";
import { VersionType } from "./versionType";

export interface InstitutionSelectFieldsResponse {
    institution: Institution;
    version1: VersionType;
    messageId: string;
}