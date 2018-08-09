
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[PrivateBook]")]
    [DisplayName("Private Book"), InstanceName("Private Book")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PrivateBookRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Book Name"), Size(50), NotNull, QuickSearch]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("Book Categories"), NotNull]
        public String BookCategories
        {
            get { return Fields.BookCategories[this]; }
            set { Fields.BookCategories[this] = value; }
        }

        [DisplayName("Author"), Size(50)]
        public String Author
        {
            get { return Fields.Author[this]; }
            set { Fields.Author[this] = value; }
        }

        [DisplayName("Price")]
        public Double? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Publisher"), Size(100)]
        public String Publisher
        {
            get { return Fields.Publisher[this]; }
            set { Fields.Publisher[this] = value; }
        }

        [DisplayName("Cover Image")]
        public String CoverImage
        {
            get { return Fields.CoverImage[this]; }
            set { Fields.CoverImage[this] = value; }
        }

        [DisplayName("Recommend Level")]
        public Double? RecommendLevel
        {
            get { return Fields.RecommendLevel[this]; }
            set { Fields.RecommendLevel[this] = value; }
        }

        [DisplayName("Insight")]
        public String Insight
        {
            get { return Fields.Insight[this]; }
            set { Fields.Insight[this] = value; }
        }

        [DisplayName("Summary")]
        public String Summary
        {
            get { return Fields.Summary[this]; }
            set { Fields.Summary[this] = value; }
        }

        [DisplayName("Need Paid")]
        public Boolean? NeedPaid
        {
            get { return Fields.NeedPaid[this]; }
            set { Fields.NeedPaid[this] = value; }
        }

        [DisplayName("Bookshelf Id")]
        public Int32? BookshelfId
        {
            get { return Fields.BookshelfId[this]; }
            set { Fields.BookshelfId[this] = value; }
        }

        [DisplayName("Off Shelves")]
        public Boolean? OffShelves
        {
            get { return Fields.OffShelves[this]; }
            set { Fields.OffShelves[this] = value; }
        }

        [DisplayName("Status"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Uploader"), NotNull]
        public Int32? Uploader
        {
            get { return Fields.Uploader[this]; }
            set { Fields.Uploader[this] = value; }
        }

        [DisplayName("Upload Time"), NotNull]
        public DateTime? UploadTime
        {
            get { return Fields.UploadTime[this]; }
            set { Fields.UploadTime[this] = value; }
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

        public PrivateBookRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField BookName;

            public StringField BookCategories;

            public StringField Author;

            public DoubleField Price;

            public StringField Publisher;

            public StringField CoverImage;

            public DoubleField RecommendLevel;

            public StringField Insight;

            public StringField Summary;

            public BooleanField NeedPaid;

            public Int32Field BookshelfId;

            public BooleanField OffShelves;

            public Int32Field Status;

            public Int32Field Uploader;

            public DateTimeField UploadTime;


		}
    }
}
