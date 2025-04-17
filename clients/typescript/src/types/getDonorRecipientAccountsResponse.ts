import { Donor } from "./donor";
import { Recipient } from "./recipient";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface GetDonorRecipientAccountsResponse extends BaseResponse {
    donor: Donor[];
    recipient: Recipient[];
    transferToAnyAccount: boolean | null;
    version1: VersionType;
}