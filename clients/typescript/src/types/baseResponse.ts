export interface BaseResponse {
    statusMessage: string;
    messageId: string;
    statusCodeValue: number;
    statusCodeValueSpecified: boolean;
    statusCode: number | null;
}