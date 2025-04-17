import { CtrPerson } from "./ctrPerson";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonSelectFieldsFilterChildrenResponse {
    ctrPerson: CtrPerson;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}