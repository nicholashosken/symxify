import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";

export interface LoanProjectionBaseRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    interestRate: number | null;
    interestType: number | null;
    paymentFrequency: number | null;
    mAprPrepaidFinanceChg: number | null;
    militaryAprLoan: boolean | null;
    dqCalculationMethod: number | null;
    dueDateAdvanceCode: number | null;
    loanDate: string | null;
    paymentType: number | null;
    paymentCalculationType: number | null;
    amortizeSchedule: number | null;
    amortizeScheduleType: number | null;
    paymentSkips: number | null;
    paymentSkipStartDay: number | null;
    dueDay1: number | null;
    dueDay2: number | null;
    firstDueDate: string | null;
    balloonDate: string | null;
    balloonAmount: number | null;
    firstInsuredBirthDate: string | null;
    secondInsuredBirthDate: string | null;
    insuranceType: number | null;
    escrowAmount: number | null;
    prepaidFinanceChg: number | null;
    messageId: string;
}