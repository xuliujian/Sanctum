namespace Sanctum.Community {
    export interface DonationRecordForm {
        DonateUserId: Serenity.IntegerEditor;
        DonatedTime: Serenity.DateEditor;
        BookId: Serenity.IntegerEditor;
        DonationStyle: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
        IsReceived: Serenity.BooleanEditor;
        Receiver: Serenity.StringEditor;
        Charger: Serenity.StringEditor;
        ReceivedTime: Serenity.DateEditor;
    }

    export class DonationRecordForm extends Serenity.PrefixedContext {
        static formKey = 'Community.DonationRecord';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DonationRecordForm.init)  {
                DonationRecordForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(DonationRecordForm, [
                    'DonateUserId', w0,
                    'DonatedTime', w1,
                    'BookId', w0,
                    'DonationStyle', w0,
                    'Comment', w2,
                    'IsReceived', w3,
                    'Receiver', w2,
                    'Charger', w2,
                    'ReceivedTime', w1
                ]);
            }
        }
    }
}
