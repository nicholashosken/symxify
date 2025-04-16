import { ExternalLoanTrackingFields } from "./externalLoanTrackingFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanTrackingSingleSelectableFields {
    includeAllExternalLoanTrackingFieldsValue: boolean;
    includeAllExternalLoanTrackingFieldsValueSpecified: boolean;
    includeAllExternalLoanTrackingFields: boolean | null;
    externalLoanTrackingFields: ExternalLoanTrackingFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
