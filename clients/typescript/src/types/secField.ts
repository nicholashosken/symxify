import { SecFieldCreSecField } from "./secFieldCreSecField";
import { SecFieldReqSecField } from "./secFieldReqSecField";
import { SecFieldRequireField } from "./secFieldRequireField";
import { SecFieldRevSecField } from "./secFieldRevSecField";
import { VersionType } from "./versionType";

export interface SecField {
    creSecField: SecFieldCreSecField[];
    recordSelection: number | null;
    reqSecField: SecFieldReqSecField[];
    requireField: SecFieldRequireField[];
    revSecField: SecFieldRevSecField[];
    version1: VersionType;
}