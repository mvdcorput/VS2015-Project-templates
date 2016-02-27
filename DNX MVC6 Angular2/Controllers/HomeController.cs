using System;
using Microsoft.AspNet.Mvc;

namespace DNXAngular2.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Home()
        {
            return View();
        }
    }
}