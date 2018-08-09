
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BorrowRequirementGrid extends Serenity.EntityGrid<BorrowRequirementRow, any> {
        protected getColumnsKey() { return 'Community.BorrowRequirement'; }
        protected getDialogType() { return BorrowRequirementDialog; }
        protected getIdProperty() { return BorrowRequirementRow.idProperty; }
        protected getLocalTextPrefix() { return BorrowRequirementRow.localTextPrefix; }
        protected getService() { return BorrowRequirementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}