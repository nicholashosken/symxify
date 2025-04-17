import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParticipantSelectableFields } from "./participantSelectableFields";
import { ParticipantChildrenFilter } from "./participantChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantSelectFieldsFilterChildrenRequest {
    participantNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParticipantSelectableFields;
    childrenSearchFilter: ParticipantChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
