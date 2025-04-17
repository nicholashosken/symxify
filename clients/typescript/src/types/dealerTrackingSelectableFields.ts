import { DealerTrackingFields } from "./dealerTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerTrackingSelectableFields {
    includeAllDealerTrackingFieldsValue: boolean;
    includeAllDealerTrackingFieldsValueSpecified: boolean;
    includeAllDealerTrackingFields: boolean | null;
    dealerTrackingFields: DealerTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}