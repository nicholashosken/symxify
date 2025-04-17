import { VersionType } from "./versionType";

export interface PlanDefaultFields {
    chargeOffDays: boolean | null;
    chargeOffPmts: boolean | null;
    chargebackCoOption: boolean | null;
    chargebackPoOption: boolean | null;
    closeDate: boolean | null;
    description: boolean | null;
    earlyPayoffDays: boolean | null;
    earlyPayoffPmts: boolean | null;
    mbrFeeAmount: boolean | null;
    memberFee: boolean | null;
    reservePlanType: boolean | null;
    type: boolean | null;
    upFrontReserveAmt: boolean | null;
    upFrontReservePercent: boolean | null;
    userAmount1: boolean | null;
    userAmount2: boolean | null;
    userAmount3: boolean | null;
    userChar1: boolean | null;
    userChar2: boolean | null;
    userChar3: boolean | null;
    userCode1: boolean | null;
    userDate1: boolean | null;
    userNumber1: boolean | null;
    userNumber2: boolean | null;
    userRate1: boolean | null;
    version1: VersionType;
}