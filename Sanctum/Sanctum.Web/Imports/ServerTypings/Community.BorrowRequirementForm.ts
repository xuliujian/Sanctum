namespace Sanctum.Community {
    export interface BorrowRequirementForm {
        PublisherID: Serenity.IntegerEditor;
        BookName: Serenity.StringEditor;
        BookCategory: Serenity.StringEditor;
        IsPaid: Serenity.BooleanEditor;
        Status: Serenity.IntegerEditor;
        ViewCount: Serenity.IntegerEditor;
        PublishTime: Serenity.DateEditor;
    }

    export class BorrowRequirementForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BorrowRequirement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BorrowRequirementForm.init)  {
                BorrowRequirementForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(BorrowRequirementForm, [
                    'PublisherID', w0,
                    'BookName', w1,
                    'BookCategory', w1,
                    'IsPaid', w2,
                    'Status', w0,
                    'ViewCount', w0,
                    'PublishTime', w3
                ]);
            }
        }
    }
}
