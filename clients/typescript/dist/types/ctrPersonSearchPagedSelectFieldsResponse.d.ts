import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";
export interface CtrPersonSearchPagedSelectFieldsResponse {
    ctrPerson: CtrPerson[];
    token: string;
    version1: VersionType;
    messageId: string;
}
