import { DealerFields } from "./dealerFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerSingleSelectableFields {
    includeAllDealerFieldsValue: boolean;
    includeAllDealerFieldsValueSpecified: boolean;
    includeAllDealerFields: boolean | null;
    dealerFields: DealerFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
