
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class PersonalityAnalysisGrid extends Serenity.EntityGrid<PersonalityAnalysisRow, any> {
        protected getColumnsKey() { return 'Community.PersonalityAnalysis'; }
        protected getDialogType() { return PersonalityAnalysisDialog; }
        protected getIdProperty() { return PersonalityAnalysisRow.idProperty; }
        protected getLocalTextPrefix() { return PersonalityAnalysisRow.localTextPrefix; }
        protected getService() { return PersonalityAnalysisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}