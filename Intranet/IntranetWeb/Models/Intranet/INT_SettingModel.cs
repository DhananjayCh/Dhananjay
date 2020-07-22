using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_SettingModel
    {
        public int ID { get; set; }
        public string Setting_For { get; set; }
        public int Before_Event { get; set; }
        public int After_Event { get; set; }
        public int Squence { get; set; }
        public string Card_Title { get; set; }
        public string Background_Color { get; set; }
        public string Font_Color { get; set; }
        public bool Show_Card_Title { get; set; }
        public bool Fixed { get; set; }
        public bool Show_Multiple { get; set; }
        public bool Active { get; set; }
    }
}