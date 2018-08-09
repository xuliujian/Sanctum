
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
    [DisplayName("Area"), InstanceName("Area")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AreaRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Size(50), PrimaryKey, QuickSearch]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Pid"), Column("PID"), Size(50)]
        public String Pid
        {
            get { return Fields.Pid[this]; }
            set { Fields.Pid[this] = value; }
        }

        [DisplayName("Short Name"), Size(100)]
        public String ShortName
        {
            get { return Fields.ShortName[this]; }
            set { Fields.ShortName[this] = value; }
        }

        [DisplayName("Name"), Size(100)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Full Name"), Size(255)]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Level")]
        public Int32? Level
        {
            get { return Fields.Level[this]; }
            set { Fields.Level[this] = value; }
        }

        [DisplayName("Pin Yin"), Size(100)]
        public String PinYin
        {
            get { return Fields.PinYin[this]; }
            set { Fields.PinYin[this] = value; }
        }

        [DisplayName("Code"), Size(10)]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Zip Code"), Size(10)]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("First Char"), Size(50)]
        public String FirstChar
        {
            get { return Fields.FirstChar[this]; }
            set { Fields.FirstChar[this] = value; }
        }

        [DisplayName("Longitude"), Size(18)]
        public Decimal? Longitude
        {
            get { return Fields.Longitude[this]; }
            set { Fields.Longitude[this] = value; }
        }

        [DisplayName("Latitude"), Size(18)]
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
