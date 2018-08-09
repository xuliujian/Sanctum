
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[DonationRecord]")]
    [DisplayName("Donation Record"), InstanceName("Donation Record")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DonationRecordRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Donate User Id"), NotNull]
        public Int32? DonateUserId
        {
            get { return Fields.DonateUserId[this]; }
            set { Fields.DonateUserId[this] = value; }
        }

        [DisplayName("Donated Time"), NotNull]
        public DateTime? DonatedTime
        {
            get { return Fields.DonatedTime[this]; }
            set { Fields.DonatedTime[this] = value; }
        }

        [DisplayName("Book Id"), NotNull]
        public Int32? BookId
        {
            get { return Fields.BookId[this]; }
            set { Fields.BookId[this] = value; }
        }

        [DisplayName("Donation Style"), NotNull]
        public Int32? DonationStyle
        {
            get { return Fields.DonationStyle[this]; }
            set { Fields.DonationStyle[this] = value; }
        }

        [DisplayName("Comment"), Size(1073741823), NotNull, QuickSearch]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("Is Received"), NotNull]
        public Boolean? IsReceived
        {
            get { return Fields.IsReceived[this]; }
            set { Fields.IsReceived[this] = value; }
        }

        [DisplayName("Receiver"), Size(50), NotNull]
        public String Receiver
        {
            get { return Fields.Receiver[this]; }
            set { Fields.Receiver[this] = value; }
        }

        [DisplayName("Charger"), Size(50), NotNull]
        public String Charger
        {
            get { return Fields.Charger[this]; }
            set { Fields.Charger[this] = value; }
        }

        [DisplayName("Received Time"), NotNull]
        public DateTime? ReceivedTime
        {
            get { return Fields.ReceivedTime[this]; }
            set { Fields.ReceivedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DonationRecordRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field DonateUserId;

            public DateTimeField DonatedTime;

            public Int32Field BookId;

            public Int32Field DonationStyle;

            public StringField Comment;

            public BooleanField IsReceived;

            public StringField Receiver;

            public StringField Charger;

            public DateTimeField ReceivedTime;


		}
    }
}
