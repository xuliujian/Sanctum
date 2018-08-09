
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[Bookshelf]")]
    [DisplayName("Bookshelf"), InstanceName("Bookshelf")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookshelfRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bookshelf Name"), Size(32), NotNull, QuickSearch]
        public String BookshelfName
        {
            get { return Fields.BookshelfName[this]; }
            set { Fields.BookshelfName[this] = value; }
        }

        [DisplayName("Adorn Background")]
        public String AdornBackground
        {
            get { return Fields.AdornBackground[this]; }
            set { Fields.AdornBackground[this] = value; }
        }

        [DisplayName("Introduction")]
        public String Introduction
        {
            get { return Fields.Introduction[this]; }
            set { Fields.Introduction[this] = value; }
        }

        [DisplayName("Creator"), NotNull]
        public Int32? Creator
        {
            get { return Fields.Creator[this]; }
            set { Fields.Creator[this] = value; }
        }

        [DisplayName("Created Time"), NotNull]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }

        [DisplayName("Modifier")]
        public Int32? Modifier
        {
            get { return Fields.Modifier[this]; }
            set { Fields.Modifier[this] = value; }
        }

        [DisplayName("Modified Time")]
        public DateTime? ModifiedTime
        {
            get { return Fields.ModifiedTime[this]; }
            set { Fields.ModifiedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BookshelfName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookshelfRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField BookshelfName;

            public StringField AdornBackground;

            public StringField Introduction;

            public Int32Field Creator;

            public DateTimeField CreatedTime;

            public Int32Field Modifier;

            public DateTimeField ModifiedTime;


		}
    }
}
