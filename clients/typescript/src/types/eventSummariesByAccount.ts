import { VersionType } from "./versionType";

export interface EventSummariesByAccount {
    id: number | null;
    accountNumber: string;
    level: string;
    longName: string;
    dueDate: string | null;
    eventType: string;
    eventTypeId: number | null;
    subject: string;
    assignedToName: string;
    statusName: string;
    contactsUrl: string;
    priorityId: number | null;
    version1: VersionType;
}