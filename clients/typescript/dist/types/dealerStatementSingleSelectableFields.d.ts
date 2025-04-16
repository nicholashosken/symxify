import { DealerStatementFields } from "./dealerStatementFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerStatementSingleSelectableFields {
    includeAllDealerStatementFieldsValue: boolean;
    includeAllDealerStatementFieldsValueSpecified: boolean;
    includeAllDealerStatementFields: boolean | null;
    dealerStatementFields: DealerStatementFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
