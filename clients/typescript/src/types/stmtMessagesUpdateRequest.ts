import { StmtMessagesFields_2 } from "./stmtMessagesFields_2";

export interface StmtMessagesUpdateRequest {
    stmtMessagesStatementMessageCodeValue: number;
    stmtMessagesStatementMessageCodeValueSpecified: boolean;
    stmtMessagesStatementMessageCode: number | null;
    stmtMessagesFields: StmtMessagesFields_2;
}