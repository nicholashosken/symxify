import { ReservePlanTransaction } from "./reservePlanTransaction";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanTransactionPagedListSelectFieldsResponse {
    reservePlanTransaction: ReservePlanTransaction[];
    reservePlanTransactionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
