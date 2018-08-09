namespace Sanctum.Community {
    export interface BorrowRecordForm {
        DebitUserId: Serenity.IntegerEditor;
        BorrowTime: Serenity.DateEditor;
        BookId: Serenity.IntegerEditor;
        BorrowRequirementId: Serenity.IntegerEditor;
        BorrowApplyId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        AcceptTime: Serenity.DateEditor;
        RevertTime: Serenity.DateEditor;
        DebitRemarkContent: Serenity.StringEditor;
        DebitRemarkTime: Serenity.DateEditor;
        RenterRemarkContent: Serenity.StringEditor;
        RenterRemarkTime: Serenity.DateEditor;
    }

    export class BorrowRecordForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BorrowRecord';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BorrowRecordForm.init)  {
                BorrowRecordForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(BorrowRecordForm, [
                    'DebitUserId', w0,
                    'BorrowTime', w1,
                    'BookId', w0,
                    'BorrowRequirementId', w0,
                    'BorrowApplyId', w0,
                    'Status', w0,
                    'AcceptTime', w1,
                    'RevertTime', w1,
                    'DebitRemarkContent', w2,
                    'DebitRemarkTime', w1,
                    'RenterRemarkContent', w2,
                    'RenterRemarkTime', w1
                ]);
            }
        }
    }
}
