import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EventSummariesByAccount {
    idValue: number;
    idValueSpecified: boolean;
    id: number | null;
    accountNumber: string;
    level: string;
    longName: string;
    dueDateValue: string;
    dueDateValueSpecified: boolean;
    dueDate: string | null;
    eventType: string;
    eventTypeIdValue: number;
    eventTypeIdValueSpecified: boolean;
    eventTypeId: number | null;
    subject: string;
    assignedToName: string;
    statusName: string;
    contactsUrl: string;
    priorityIdValue: number;
    priorityIdValueSpecified: boolean;
    priorityId: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
