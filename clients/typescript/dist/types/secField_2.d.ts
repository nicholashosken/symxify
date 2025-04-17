import { SecFieldCreSecField_2 } from "./secFieldCreSecField_2";
import { SecFieldReqSecField_2 } from "./secFieldReqSecField_2";
import { SecFieldRequireField_2 } from "./secFieldRequireField_2";
import { SecFieldRevSecField_2 } from "./secFieldRevSecField_2";
import { VersionType } from "./versionType";
export interface SecField_2 {
    creSecField: SecFieldCreSecField_2[];
    recordSelection: number | null;
    reqSecField: SecFieldReqSecField_2[];
    requireField: SecFieldRequireField_2[];
    revSecField: SecFieldRevSecField_2[];
    version1: VersionType;
}
