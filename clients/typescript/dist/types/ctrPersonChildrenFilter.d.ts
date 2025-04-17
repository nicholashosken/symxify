import { CtrPersonCtrTranInfoFilter } from "./ctrPersonCtrTranInfoFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonChildrenFilter {
    ctrPersonCtrTranInfoFilter: CtrPersonCtrTranInfoFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
