
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
    [DisplayName("书架"), InstanceName("书架")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookshelfRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity,Hidden]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("书架名称"), Size(32), NotNull, QuickSearch]
        public String BookshelfName
        {
            get { return Fields.BookshelfName[this]; }
            set { Fields.BookshelfName[this] = value; }
        }

        [DisplayName("背景图片")]
        public String AdornBackground
        {
            get { return Fields.AdornBackground[this]; }
            set { Fields.AdornBackground[this] = value; }
        }

        [DisplayName("书架介绍")]
        public String Introduction
        {
            get { return Fields.Introduction[this]; }
            set { Fields.Introduction[this] = value; }
        }

        [DisplayName("创建者"), NotNull]
        public Int32? Creator
        {
            get { return Fields.Creator[this]; }
            set { Fields.Creator[this] = value; }
        }

        [DisplayName("创建时间"), NotNull]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }

        [DisplayName("更新者")]
        public Int32? Modifier
        {
            get { return Fields.Modifier[this]; }
            set { Fields.Modifier[this] = value; }
        }

        [DisplayName("更新时间")]
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
