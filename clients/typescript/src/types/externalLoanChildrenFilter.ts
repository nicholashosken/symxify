import { ExternalLoanNameFilter } from "./externalLoanNameFilter";
import { ExternalLoanNoteFilter } from "./externalLoanNoteFilter";
import { ExternalLoanTrackingFilter } from "./externalLoanTrackingFilter";
import { ExternalLoanTransferFilter } from "./externalLoanTransferFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanChildrenFilter {
    externalLoanNameFilter: ExternalLoanNameFilter;
    externalLoanNoteFilter: ExternalLoanNoteFilter;
    externalLoanTrackingFilter: ExternalLoanTrackingFilter;
    externalLoanTransferFilter: ExternalLoanTransferFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}