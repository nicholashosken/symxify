import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";

export interface CtrPersonPagedListSelectFieldsResponse {
    ctrPerson: CtrPerson[];
    token: string;
    version1: VersionType;
    messageId: string;
}