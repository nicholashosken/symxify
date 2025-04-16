import { EftTransferFields } from "./eftTransferFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EftTransferSelectableFields {
    includeAllEftTransferFieldsValue: boolean;
    includeAllEftTransferFieldsValueSpecified: boolean;
    includeAllEftTransferFields: boolean | null;
    eftTransferFields: EftTransferFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
