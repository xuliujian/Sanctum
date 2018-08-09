
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[RecommendBook]")]
    [DisplayName("Recommend Book"), InstanceName("Recommend Book")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RecommendBookRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Book Name"), Size(100), NotNull, QuickSearch]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("Book Category"), NotNull]
        public String BookCategory
        {
            get { return Fields.BookCategory[this]; }
            set { Fields.BookCategory[this] = value; }
        }

        [DisplayName("Author"), Size(50)]
        public String Author
        {
            get { return Fields.Author[this]; }
            set { Fields.Author[this] = value; }
        }

        [DisplayName("Exponent")]
        public Double? Exponent
        {
            get { return Fields.Exponent[this]; }
            set { Fields.Exponent[this] = value; }
        }

        [DisplayName("Book Remark"), Size(1073741823)]
        public String BookRemark
        {
            get { return Fields.BookRemark[this]; }
            set { Fields.BookRemark[this] = value; }
        }

        [DisplayName("Instroduction"), Size(1073741823)]
        public String Instroduction
        {
            get { return Fields.Instroduction[this]; }
            set { Fields.Instroduction[this] = value; }
        }

        [DisplayName("View Count")]
        public Int32? ViewCount
        {
            get { return Fields.ViewCount[this]; }
            set { Fields.ViewCount[this] = value; }
        }

        [DisplayName("Heat Level")]
        public Double? HeatLevel
        {
            get { return Fields.HeatLevel[this]; }
            set { Fields.HeatLevel[this] = value; }
        }

        [DisplayName("Referrer"), NotNull]
        public Int32? Referrer
        {
            get { return Fields.Referrer[this]; }
            set { Fields.Referrer[this] = value; }
        }

        [DisplayName("Refer Time"), NotNull]
        public DateTime? ReferTime
        {
            get { return Fields.ReferTime[this]; }
            set { Fields.ReferTime[this] = value; }
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

        public RecommendBookRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField BookName;

            public StringField BookCategory;

            public StringField Author;

            public DoubleField Exponent;

            public StringField BookRemark;

            public StringField Instroduction;

            public Int32Field ViewCount;

            public DoubleField HeatLevel;

            public Int32Field Referrer;

            public DateTimeField ReferTime;


		}
    }
}
