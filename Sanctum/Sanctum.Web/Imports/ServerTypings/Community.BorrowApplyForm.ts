namespace Sanctum.Community {
    export interface BorrowApplyForm {
        ApplyBookId: Serenity.IntegerEditor;
        Applier: Serenity.IntegerEditor;
        ApplyTime: Serenity.DateEditor;
        ApplyStatus: Serenity.IntegerEditor;
    }

    export class BorrowApplyForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BorrowApply';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BorrowApplyForm.init)  {
                BorrowApplyForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(BorrowApplyForm, [
                    'ApplyBookId', w0,
                    'Applier', w0,
                    'ApplyTime', w1,
                    'ApplyStatus', w0
                ]);
            }
        }
    }
}
