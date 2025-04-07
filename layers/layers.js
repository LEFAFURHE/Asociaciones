ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([396075.592871, 1025640.044263, 402992.904152, 1028947.740152]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Predios_1 = new ol.format.GeoJSON();
var features_Predios_1 = format_Predios_1.readFeatures(json_Predios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Predios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_1.addFeatures(features_Predios_1);
var lyr_Predios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_1, 
                style: style_Predios_1,
                popuplayertitle: 'Predios',
                interactive: true,
                title: '<img src="styles/legend/Predios_1.png" /> Predios'
            });
var format_waypoints_2 = new ol.format.GeoJSON();
var features_waypoints_2 = format_waypoints_2.readFeatures(json_waypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_waypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waypoints_2.addFeatures(features_waypoints_2);
cluster_waypoints_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_waypoints_2
});
var lyr_waypoints_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_waypoints_2, 
                style: style_waypoints_2,
                popuplayertitle: 'waypoints',
                interactive: false,
                title: '<img src="styles/legend/waypoints_2.png" /> waypoints'
            });
var group_Asociaciones = new ol.layer.Group({
                                layers: [lyr_waypoints_2,],
                                fold: "open",
                                title: 'Asociaciones'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Predios_1.setVisible(true);lyr_waypoints_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Predios_1,group_Asociaciones];
lyr_Predios_1.set('fieldAliases', {'id': 'id', 'Área': 'Área de Terreno Predio', 'Recomendac': 'Prácticas de Manejo', 'Caracterí': 'Características del Suelo', });
lyr_waypoints_2.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'gpxx_WaypointExtension': 'gpxx_WaypointExtension', 'wptx1_WaypointExtension': 'wptx1_WaypointExtension', 'ctx_CreationTimeExtension': 'ctx_CreationTimeExtension', });
lyr_Predios_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Recomendac': 'TextEdit', 'Caracterí': 'TextEdit', });
lyr_waypoints_2.set('fieldImages', {'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', 'gpxx_WaypointExtension': 'TextEdit', 'wptx1_WaypointExtension': 'TextEdit', 'ctx_CreationTimeExtension': 'TextEdit', });
lyr_Predios_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'Recomendac': 'inline label - always visible', 'Caracterí': 'inline label - always visible', });
lyr_waypoints_2.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', 'gpxx_WaypointExtension': 'no label', 'wptx1_WaypointExtension': 'no label', 'ctx_CreationTimeExtension': 'no label', });
lyr_waypoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});