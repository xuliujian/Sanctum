using Serenity.Navigation;
using Administration = Sanctum.Administration.Pages;

[assembly: NavigationMenu(int.MaxValue, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(int.MaxValue, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(int.MaxValue, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-globe")]
[assembly: NavigationLink(int.MaxValue, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]
[assembly: NavigationLink(int.MaxValue, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(int.MaxValue, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]