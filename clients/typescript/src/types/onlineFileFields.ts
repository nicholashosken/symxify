import { VersionType } from "./versionType";

export interface OnlineFileFields {
    availBalExclList: boolean | null;
    availBalInclOdProtection: boolean | null;
    availBalInclOdTolerance: boolean | null;
    bonusAwardsTrackingType: boolean | null;
    cardFraudNoteExpDays: boolean | null;
    cardType: boolean | null;
    digitalIssueTrackingType: boolean | null;
    excludedStatusReasonCodes: boolean | null;
    fileRecord: boolean | null;
    fileType: boolean | null;
    fileUpdateMethod: boolean | null;
    fraudControlTrackingType: boolean | null;
    fwdUpdateToPinNetwork: boolean | null;
    fwdUpdatesfrmOtherNetworks: boolean | null;
    fwdUpdatetoVisaMasterCard: boolean | null;
    highPriorityMsgOption: boolean | null;
    institutionId: boolean | null;
    limitGroupId: boolean | null;
    minimumBalanceChange: boolean | null;
    networkMessageFormat: boolean | null;
    onlineCardOrdering: boolean | null;
    purgeDays: boolean | null;
    receiveCardFraudNoteCode: boolean | null;
    sendActivationMessage: boolean | null;
    sendBalances: boolean | null;
    sendCardFraudNoteCode: boolean | null;
    sendNewCardOption: boolean | null;
    sendPinOffsetMessage: boolean | null;
    suffixFormat: boolean | null;
    thirdPartyPayments: number[];
    useMailOverride: boolean | null;
    vauAbuOptOutWarningCode: boolean | null;
    version1: VersionType;
}