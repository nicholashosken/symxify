import { ExternalLoanTransferFields } from "./externalLoanTransferFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanTransferSelectableFields {
    includeAllExternalLoanTransferFieldsValue: boolean;
    includeAllExternalLoanTransferFieldsValueSpecified: boolean;
    includeAllExternalLoanTransferFields: boolean | null;
    externalLoanTransferFields: ExternalLoanTransferFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
