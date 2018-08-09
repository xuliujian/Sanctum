namespace Sanctum.Community {
    export interface BookCategoryForm {
        CategoryName: Serenity.StringEditor;
        ParentId: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
        IsEnable: Serenity.BooleanEditor;
        Creator: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
        Modifier: Serenity.IntegerEditor;
        ModifiedTime: Serenity.DateEditor;
    }

    export class BookCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BookCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookCategoryForm.init)  {
                BookCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(BookCategoryForm, [
                    'CategoryName', w0,
                    'ParentId', w1,
                    'Remark', w0,
                    'IsEnable', w2,
                    'Creator', w1,
                    'CreatedTime', w3,
                    'Modifier', w1,
                    'ModifiedTime', w3
                ]);
            }
        }
    }
}
