import { ExternalLoanFields } from "./externalLoanFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanSingleSelectableFields {
    includeAllExternalLoanFieldsValue: boolean;
    includeAllExternalLoanFieldsValueSpecified: boolean;
    includeAllExternalLoanFields: boolean | null;
    externalLoanFields: ExternalLoanFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
