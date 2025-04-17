import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";

export interface CtrPersonSelectFieldsFilterChildrenResponse {
    ctrPerson: CtrPerson;
    version1: VersionType;
    messageId: string;
}