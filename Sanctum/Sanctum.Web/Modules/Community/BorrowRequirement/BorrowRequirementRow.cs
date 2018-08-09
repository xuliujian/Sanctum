
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BorrowRequirement]")]
    [DisplayName("Borrow Requirement"), InstanceName("Borrow Requirement")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorrowRequirementRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Publisher"), NotNull]
        public Int32? Publisher
        {
            get { return Fields.Publisher[this]; }
            set { Fields.Publisher[this] = value; }
        }

        [DisplayName("Book Name"), Size(100), QuickSearch]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("Book Category"), Size(100)]
        public String BookCategory
        {
            get { return Fields.BookCategory[this]; }
            set { Fields.BookCategory[this] = value; }
        }

        [DisplayName("Is Paid"), NotNull]
        public Boolean? IsPaid
        {
            get { return Fields.IsPaid[this]; }
            set { Fields.IsPaid[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("View Count"), NotNull]
        public Int32? ViewCount
        {
            get { return Fields.ViewCount[this]; }
            set { Fields.ViewCount[this] = value; }
        }

        [DisplayName("Publish Time")]
        public DateTime? PublishTime
        {
            get { return Fields.PublishTime[this]; }
            set { Fields.PublishTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BookName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BorrowRequirementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field Publisher;

            public StringField BookName;

            public StringField BookCategory;

            public BooleanField IsPaid;

            public Int32Field Status;

            public Int32Field ViewCount;

            public DateTimeField PublishTime;


		}
    }
}
