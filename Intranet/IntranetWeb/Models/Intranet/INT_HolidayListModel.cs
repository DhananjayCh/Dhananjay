using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetWeb.Models.Intranet
{
    public class INT_HolidayListModel
    {
        public int ID { get; set; }
        public string Holiday_Title { get; set; }
        public string Holiday_Date { get; set; }
        public bool Active { get; set; }
    }
}