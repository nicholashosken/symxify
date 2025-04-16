import { Donor } from "./donor";
import { Recipient } from "./recipient";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";

export interface GetDonorRecipientAccountsResponse extends BaseResponse {
    donor: Donor[];
    donorSpecified: boolean;
    recipient: Recipient[];
    recipientSpecified: boolean;
    transferToAnyAccountValue: boolean;
    transferToAnyAccountValueSpecified: boolean;
    transferToAnyAccount: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}