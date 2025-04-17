import { Eft } from "./eft";
import { VersionType } from "./versionType";

export interface EftSelectFieldsFilterChildrenResponse {
    eft: Eft;
    version1: VersionType;
    messageId: string;
}