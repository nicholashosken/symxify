import { WireDrawdownDebitAcctAdvFields } from "./wireDrawdownDebitAcctAdvFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireDrawdownDebitAcctAdvSingleSelectableFields {
    includeAllWireDrawdownDebitAcctAdvFieldsValue: boolean;
    includeAllWireDrawdownDebitAcctAdvFieldsValueSpecified: boolean;
    includeAllWireDrawdownDebitAcctAdvFields: boolean | null;
    wireDrawdownDebitAcctAdvFields: WireDrawdownDebitAcctAdvFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
