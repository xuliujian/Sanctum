
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class PersonalityAnalysisDialog extends Serenity.EntityDialog<PersonalityAnalysisRow, any> {
        protected getFormKey() { return PersonalityAnalysisForm.formKey; }
        protected getIdProperty() { return PersonalityAnalysisRow.idProperty; }
        protected getLocalTextPrefix() { return PersonalityAnalysisRow.localTextPrefix; }
        protected getNameProperty() { return PersonalityAnalysisRow.nameProperty; }
        protected getService() { return PersonalityAnalysisService.baseUrl; }

        protected form = new PersonalityAnalysisForm(this.idPrefix);

    }
}