export interface LoanProjectionBaseResponse {
    statusMessage: string;
    payment: number | null;
    loanAmount: number | null;
    paymentCount: number | null;
    finalPayment: number | null;
    finalDueDate: string | null;
    firstPaymentDate: string | null;
    totalInterest: number | null;
    totalPayments: number | null;
    totalEscrow: number | null;
    totalMaprFees: number | null;
    life: number | null;
    disability: number | null;
    lifeError: string;
    disabilityError: string;
    apr: number | null;
    mapr: number | null;
    messageId: string;
    statusCode: number | null;
}