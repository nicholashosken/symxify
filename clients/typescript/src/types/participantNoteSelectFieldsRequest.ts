import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantNoteSingleSelectableFields } from "./participantNoteSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantNoteSelectFieldsRequest {
    participantNumber: string;
    participantNoteLocatorValue: number;
    participantNoteLocatorValueSpecified: boolean;
    participantNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantNoteSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}