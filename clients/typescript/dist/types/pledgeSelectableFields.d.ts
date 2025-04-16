import { PledgeFields } from "./pledgeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PledgeSelectableFields {
    includeAllPledgeFieldsValue: boolean;
    includeAllPledgeFieldsValueSpecified: boolean;
    includeAllPledgeFields: boolean | null;
    pledgeFields: PledgeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
