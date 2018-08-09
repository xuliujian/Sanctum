
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class DonationRecordGrid extends Serenity.EntityGrid<DonationRecordRow, any> {
        protected getColumnsKey() { return 'Community.DonationRecord'; }
        protected getDialogType() { return DonationRecordDialog; }
        protected getIdProperty() { return DonationRecordRow.idProperty; }
        protected getLocalTextPrefix() { return DonationRecordRow.localTextPrefix; }
        protected getService() { return DonationRecordService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}