import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrPersonCtrTranInfoPagedListSelectFieldsResponse {
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo[];
    ctrPersonCtrTranInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}