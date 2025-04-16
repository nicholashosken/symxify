import { ExternalLoanNameFields } from "./externalLoanNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanNameSingleSelectableFields {
    includeAllExternalLoanNameFieldsValue: boolean;
    includeAllExternalLoanNameFieldsValueSpecified: boolean;
    includeAllExternalLoanNameFields: boolean | null;
    externalLoanNameFields: ExternalLoanNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}