import { LoanAppNoteFields } from "./loanAppNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppNoteSingleSelectableFields {
    includeAllLoanAppNoteFieldsValue: boolean;
    includeAllLoanAppNoteFieldsValueSpecified: boolean;
    includeAllLoanAppNoteFields: boolean | null;
    loanAppNoteFields: LoanAppNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
