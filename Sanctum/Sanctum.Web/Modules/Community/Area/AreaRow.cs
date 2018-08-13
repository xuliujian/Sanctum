
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[Area]")]
    [DisplayName("地区"), InstanceName("地区")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AreaRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Size(50), PrimaryKey, Hidden]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("所属区域"), Column("PID"), Size(50), Hidden]
        public String Pid
        {
            get { return Fields.Pid[this]; }
            set { Fields.Pid[this] = value; }
        }

        [DisplayName("简称"), Size(100),QuickSearch]
        public String ShortName
        {
            get { return Fields.ShortName[this]; }
            set { Fields.ShortName[this] = value; }
        }

        [DisplayName("名称"), Size(100), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("全称"), Size(255), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("层级")]
        public Int32? Level
        {
            get { return Fields.Level[this]; }
            set { Fields.Level[this] = value; }
        }

        [DisplayName("拼音"), Size(100)]
        public String PinYin
        {
            get { return Fields.PinYin[this]; }
            set { Fields.PinYin[this] = value; }
        }

        [DisplayName("长途区号"), Size(10)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("邮政编码"), Size(10)]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("首字母"), Size(50)]
        public String FirstChar
        {
            get { return Fields.FirstChar[this]; }
            set { Fields.FirstChar[this] = value; }
        }

        [DisplayName("经度"), Size(18)]
        public Decimal? Longitude
        {
            get { return Fields.Longitude[this]; }
            set { Fields.Longitude[this] = value; }
        }

        [DisplayName("维度"), Size(18)]
        public Decimal? Latitude
        {
            get { return Fields.Latitude[this]; }
            set { Fields.Latitude[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AreaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public StringField Id;

            public StringField Pid;

            public StringField ShortName;

            public StringField Name;

            public StringField FullName;

            public Int32Field Level;

            public StringField PinYin;

            public StringField Code;

            public StringField ZipCode;

            public StringField FirstChar;

            public DecimalField Longitude;

            public DecimalField Latitude;


		}
    }
}
