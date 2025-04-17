import { VersionType } from "./versionType";

export interface RegCcFields {
    aggregateException: boolean | null;
    bankingDay: boolean | null;
    bankingDaysOption: boolean | null;
    branch: boolean | null;
    branchReference: boolean | null;
    branchValidCode: boolean | null;
    businessDays: boolean | null;
    excpWarningCodeList: boolean | null;
    federalReserveHoliday: number[];
    foreignItemHoldDays: boolean | null;
    holdPolicy: boolean | null;
    holdWarningCodeList: boolean | null;
    krHoldBaseAmtOption: boolean | null;
    krHoldBaseOption: boolean | null;
    largeDepositExceptionHold: boolean | null;
    lastDayAvailable: boolean | null;
    localAggrgtExcpHoldDays: boolean | null;
    localExceptionHoldDays: boolean | null;
    localHoldDays: boolean | null;
    maxHoldCalendarDays: boolean | null;
    newAccountHoldDays: boolean | null;
    newAccountWarningCode: boolean | null;
    nextDayAvailExcpRsnList: boolean | null;
    nextDayAvailable: boolean | null;
    nextDayDays: boolean | null;
    nonLocalAggrgtExcpHoldDay: boolean | null;
    nonLocalExceptionHoldDays: boolean | null;
    nonlocalHoldDays: boolean | null;
    repeatedNsfWarningCode: boolean | null;
    routingNumberHoldDays: number[];
    routingNumberPrefix: number[];
    savingsPolicy: boolean | null;
    useMicrRtPrefix: boolean | null;
    version1: VersionType;
}