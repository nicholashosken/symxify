import { SecFieldCreSecField } from "./secFieldCreSecField";
import { SecFieldReqSecField } from "./secFieldReqSecField";
import { SecFieldRequireField } from "./secFieldRequireField";
import { SecFieldRevSecField } from "./secFieldRevSecField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SecField {
    creSecField: SecFieldCreSecField[];
    creSecFieldSpecified: boolean;
    recordSelectionValue: number;
    recordSelectionValueSpecified: boolean;
    recordSelection: number | null;
    reqSecField: SecFieldReqSecField[];
    reqSecFieldSpecified: boolean;
    requireField: SecFieldRequireField[];
    requireFieldSpecified: boolean;
    revSecField: SecFieldRevSecField[];
    revSecFieldSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
