import { VersionType } from "./versionType";

export interface OnlineBlockFields {
    blockWarningsList: boolean | null;
    cardAcceptorCountryCode: boolean | null;
    cardAcceptorIdCode: boolean | null;
    cardAcceptorName: boolean | null;
    cardAcceptorStates: boolean | null;
    cardAcceptorZipCodes: boolean | null;
    cardNotPresent: boolean | null;
    cardTypes: boolean | null;
    description: boolean | null;
    emvFallback: boolean | null;
    excludedCountryCodes: boolean | null;
    expirationDate: boolean | null;
    masterCardRiskScore: boolean | null;
    maximumTransactionAmount: boolean | null;
    merchantTypes: boolean | null;
    minimumTransactionAmount: boolean | null;
    overrideWarningsList: boolean | null;
    panEntryModes: boolean | null;
    persontoPersonPayment: boolean | null;
    pinlessPinTransaction: boolean | null;
    pseudoTerminalId: boolean | null;
    ruleNumber: boolean | null;
    terminalId: boolean | null;
    trackingRecordOverride: boolean | null;
    transactionCodes: boolean | null;
    transactionTypes: boolean | null;
    visaAdvAuthScore: boolean | null;
    version1: VersionType;
}