namespace Sanctum.Community {
    export interface BookFriendForm {
        GroupId: Serenity.IntegerEditor;
        MemberId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        ActiveLevel: Serenity.DecimalEditor;
        JoinTime: Serenity.DateEditor;
    }

    export class BookFriendForm extends Serenity.PrefixedContext {
        static formKey = 'Community.BookFriend';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BookFriendForm.init)  {
                BookFriendForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(BookFriendForm, [
                    'GroupId', w0,
                    'MemberId', w0,
                    'Status', w0,
                    'ActiveLevel', w1,
                    'JoinTime', w2
                ]);
            }
        }
    }
}
