package com.group.pbox.pvbs.util;

public class ErrorCode
{
    // 0-system level
    // response success
    public static final String RESPONSE_SUCCESS = "00000";
    // response error
    public static final String RESPONSE_ERROR = "00011";

    // DB operation error.
    public static final String DB_OPERATION_ERROR = "00012";

    public static final String SYSTEM_OPERATION_ERROR = "00013";
    // 1-business level
    // Account Balance.
    // Currency Not Found
    public static final String CURRENCY_NOT_FOUND = "10001";
    // Exceed Limit
    public static final String EXCEED_LIMIT = "10002";
    // Insufficient Fund
    public static final String INSUFFICIENT_FUNDING = "10003";
    // Record Not Found
    public static final String RECORD_NOT_FOUND = "10004";
    // Account Balance Not Zero
    public static final String ACCOUNT_BALANCE_NOT_ZERO = "10005";
    // can not withDraw so much money.too more.
    public static final String ACCOUNT_BALANCE_LESS = "10006";

    // Account Have Found
    public static final String ACCOUNT_HAVE_FOUND = "10007";
    // Account Have Not Found
    public static final String ACCOUNT_HAVE_NOT_FOUND = "10008";
    // Add Account Success
    public static String ADD_ACCOUNT_SUCCESS = "10009";
    // Add Account Failed
    public static final String ADD_ACCOUNT_FAILED = "10010";

    // Edit Account Mater Success
    public static final String EDIT_ACCOUNT_MASTER_SUCCESS = "10011";
    // Edit Account Mater Failed
    public static final String EDIT_ACCOUNT_MASTER_FAILED = "10012";
    // Close Account Success
    public static final String CLOSE_ACCOUNT_SUCCESS = "10013";
    // Close Account Fail
    public static final String CLOSE_ACCOUNT_FAILED = "10014";
    public static final String ACCOUNT_HAVE_CLOSED = "10015";
    // Inquire Balance Failed
    public static final String ENQUIRE_BALANCE_FAILED = "10016";
    // Inquire Balance Success
    public static final String ENQUIRE_BALANCE_SUCCESS = "10017";
    // Account transfer source not found
    public static final String ACCOUNT_TRANSFER_SOURCE_NOT_FOUND = "10018";
    // Account transfer traget not found
    public static final String ACCOUNT_TRANSFER_TARGET_NOT_FOUND = "10019";
    // User not found
    public static final String USER_NOT_FOUND = "10020";
    // Session not found
    public static final String SESSION_NOT_FOUND = "10021";
    // TD record has been pulled down
    public static final String TD_HAS_DROPDOWN = "10022";
    // Transaction is not mature
    public static final String TRANSACTION_IS_NOT_MATURE = "10023";
    // update status fail
    public static final String UPDATE_STATUS_FAIL = "10024";

    // Accept transaction
    public static final String ACCEPT_TRANSACTION = "10025";
    // update balance fail
    public static final String UPDATE_BALANCE_FAIL = "10026";
    // Transaction Account NUmber Have not find
    public static final String TRANS_ACCT_HAVE_NOT_FIND = "10027";
    // Debit Account NUmber Have not find
    public static final String DEBIT_ACCT_HAVE_NOT_FIND = "10028";
    // Credit Account NUmber Have not find
    public static final String CREDIT_ACCT_HAVE_NOT_FIND = "10029";
    //user already exists
    public static final String USER_ALEARDY_EXISTS = "10030";

}
