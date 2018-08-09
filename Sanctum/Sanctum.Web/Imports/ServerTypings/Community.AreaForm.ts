namespace Sanctum.Community {
    export interface AreaForm {
        Pid: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        FullName: Serenity.StringEditor;
        Level: Serenity.IntegerEditor;
        PinYin: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        FirstChar: Serenity.StringEditor;
        Longitude: Serenity.DecimalEditor;
        Latitude: Serenity.DecimalEditor;
    }

    export class AreaForm extends Serenity.PrefixedContext {
        static formKey = 'Community.Area';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AreaForm.init)  {
                AreaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(AreaForm, [
                    'Pid', w0,
                    'ShortName', w0,
                    'Name', w0,
                    'FullName', w0,
                    'Level', w1,
                    'PinYin', w0,
                    'Code', w0,
                    'ZipCode', w0,
                    'FirstChar', w0,
                    'Longitude', w2,
                    'Latitude', w2
                ]);
            }
        }
    }
}
