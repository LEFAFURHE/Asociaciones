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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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

lyr_GoogleSatellite_0.setVisible(true);lyr_Predios_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Predios_1];
lyr_Predios_1.set('fieldAliases', {'id': 'id', 'Área': 'Área de Terreno Predio', 'Recomendac': 'Prácticas de Manejo', 'Caracterí': 'Características del Suelo', 'DFP': 'DFP CONSULTORES', });
lyr_Predios_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Recomendac': 'TextEdit', 'Caracterí': 'TextEdit', 'DFP': 'ExternalResource', });
lyr_Predios_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', 'Recomendac': 'inline label - always visible', 'Caracterí': 'inline label - always visible', 'DFP': 'inline label - always visible', });
lyr_Predios_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});