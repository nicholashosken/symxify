import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonPagedListSelectFieldsResponse {
    ctrPerson: CtrPerson[];
    ctrPersonSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
