﻿app.factory('types065', [
    function() {
        return function() {
            return {
                rect: { name: 'Rect', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.rect(v=vs.110).aspx' },
                color: { name: 'Color', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.color(v=vs.110).aspx' },
                bool: { name: 'bool', ref: 'https://msdn.microsoft.com/en-us/library/c8f5xwh7.aspx' },
                string: { name: 'string', ref: 'https://msdn.microsoft.com/es-us/library/362314fe.aspx' },
                dbl: { name: 'double', ref: 'https://msdn.microsoft.com/en-us/es-u/library/678hzkk9.aspx' },
                integer: { name: 'int', ref: 'https://msdn.microsoft.com/en-us/library/5kzh1b5w.aspx' },
                fontFamily: { name: 'FontFamily', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.fontfamily(v=vs.110).aspx' },
                fontWeight: { name: 'FontWeight', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.fontweights(v=vs.110).aspx' },
                fontStyle: { name: 'FontStyle', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.controls.textblock.fontstyle(v=vs.110).aspx' },
                fontStretch: { name: 'FontStretch', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.fontstretch(v=vs.110).aspx' },
                brush: { name: 'Brush', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.media.brush(v=vs.110).aspx' },
                point: { name: 'Point', ref: 'https://msdn.microsoft.com/en-us/library/system.windows.point(v=vs.110).aspx' },
                object: { name: 'object', ref: 'https://msdn.microsoft.com/en-us/library/9kkx3h3c.aspx' },
                voidType: { name: 'void', ref: 'https://msdn.microsoft.com/en-us/library/yah0tteb.aspx' },
                chart: { name: 'chart', ref: '#/documentation/0.6.5/chart#title' },
                iSeriesConfiguration: { name: 'ISeriesConfiguration', ref: '#/documentation/0.6.5/0.6.5/iseriesconfiguration#title' },
                iChartSeries: { name: 'IChartSeries', ref: '#/documentation/0.6.5/ichartseries#title' },
                seriesConfiguration: { name: 'SeriesConfiguration<T>', ref: '#/documentation/0.6.5/seriesconfiguration#title' },
                iChartValues: { name: 'IChartValues', ref: '#/documentation/0.6.5/ichartvalues#title' },
                chartPoint: { name: 'ChartPoint', ref: '#/documentation/0.6.5/chartpoint#title' },
                axis: { name: 'Axis', ref: '#/documentation/0.6.5/axis#title' },
                separator: { name: 'Separator', ref: "#/documentation/0.6.5/separator#title" },
                zoomingOptions: { name: 'ZoomingOptions', ref: '#/documentation/0.6.5/zoomingoptions#title' },
                legendLocation: { name: 'LegendLocation', ref: '#/documentation/0.6.5/legendlocation#title' },
                chartLegend: { name: 'ChartLegend', ref: '#/documentation/0.6.5/chartlegend#title' },
                series: { name: 'Series', ref: '#/documentation/0.6.5/series#title' },
                seriesCollection: { name: 'SeriesCollection', ref: '#/documentation/0.6.5/seriescollection#title' },
                axisTags: { name: 'AxisTags', ref: '#/documentation/0.6.5/axistags#title' }
            };
        }
    }
]);