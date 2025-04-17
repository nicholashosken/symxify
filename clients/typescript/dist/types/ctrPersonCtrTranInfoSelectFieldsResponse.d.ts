import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonCtrTranInfoSelectFieldsResponse {
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
