
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class DonationRecordDialog extends Serenity.EntityDialog<DonationRecordRow, any> {
        protected getFormKey() { return DonationRecordForm.formKey; }
        protected getIdProperty() { return DonationRecordRow.idProperty; }
        protected getLocalTextPrefix() { return DonationRecordRow.localTextPrefix; }
        protected getNameProperty() { return DonationRecordRow.nameProperty; }
        protected getService() { return DonationRecordService.baseUrl; }

        protected form = new DonationRecordForm(this.idPrefix);

    }
}