import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";

export interface CtrPersonSelectFieldsResponse {
    ctrPerson: CtrPerson;
    version1: VersionType;
    messageId: string;
}