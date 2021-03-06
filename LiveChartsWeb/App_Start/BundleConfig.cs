﻿using System.Web;
using System.Web.Optimization;

namespace LiveChartsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/BannerContent/css").Include(
                "~/Content/font-awesome.css",
                "~/Content/bootstrap.css",
                "~/Content/banner.css"));

            bundles.Add(new StyleBundle("~/AppContent/css").Include(
                "~/Content/font-awesome.css",
                "~/Content/bootstrap.css",
                "~/Content/prettify.css",
                "~/Content/app.css"));

            bundles.Add(new ScriptBundle("~/bundles/banner").Include(
                "~/Scripts/skrollr.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/prettify.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-sanitize.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular.aria.js",

                "~/App/app.js",

                //versioning mappers
                "~/App/Docs/docMapper.js",
                "~/App/Examples/examplesMapper.js",

                //065 docs
                "~/App/Docs/beta/types.js",
                "~/App/Docs/beta/components.js",
                "~/App/Docs/beta/docsService.js",

                //v1 examples
                "~/App/Examples/v1/v1.js",

                //directives
                "~/App/directives.js",

                //controllers
                "~/App/Controllers/template.js",
                "~/App/Controllers/home.js",
                "~/App/Controllers/docs.js",
                "~/App/Controllers/examples.js"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}
