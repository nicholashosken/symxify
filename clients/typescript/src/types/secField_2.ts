import { SecFieldCreSecField_2 } from "./secFieldCreSecField_2";
import { SecFieldReqSecField_2 } from "./secFieldReqSecField_2";
import { SecFieldRequireField_2 } from "./secFieldRequireField_2";
import { SecFieldRevSecField_2 } from "./secFieldRevSecField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecField_2 {
    creSecField: SecFieldCreSecField_2[];
    creSecFieldSpecified: boolean;
    recordSelectionValue: number;
    recordSelectionValueSpecified: boolean;
    recordSelection: number | null;
    reqSecField: SecFieldReqSecField_2[];
    reqSecFieldSpecified: boolean;
    requireField: SecFieldRequireField_2[];
    requireFieldSpecified: boolean;
    revSecField: SecFieldRevSecField_2[];
    revSecFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}