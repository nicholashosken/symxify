import { VersionType } from "./versionType";
export interface PlanDefault {
    chargeOffDays: number | null;
    chargeOffPmts: number | null;
    chargebackCoOption: number | null;
    chargebackPoOption: number | null;
    closeDate: string | null;
    description: string;
    earlyPayoffDays: number | null;
    earlyPayoffPmts: number | null;
    mbrFeeAmount: number | null;
    memberFee: number | null;
    reservePlanType: number | null;
    type: number | null;
    upFrontReserveAmt: number | null;
    upFrontReservePercent: number | null;
    userAmount1: number | null;
    userAmount2: number | null;
    userAmount3: number | null;
    userChar1: string;
    userChar2: string;
    userChar3: string;
    userCode1: number | null;
    userDate1: string | null;
    userNumber1: number | null;
    userNumber2: number | null;
    userRate1: number | null;
    version1: VersionType;
}
