namespace Sanctum.Community {
    export interface BookFriendGroupForm {
        GroupName: Serenity.StringEditor;
        OwnerId: Serenity.IntegerEditor;
        CreatedTime: Serenity.DateEditor;
    }

    export class BookFriendGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BookFriendGroup';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookFriendGroupForm.init)  {
                BookFriendGroupForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(BookFriendGroupForm, [
                    'GroupName', w0,
                    'OwnerId', w1,
                    'CreatedTime', w2
                ]);
            }
        }
    }
}
