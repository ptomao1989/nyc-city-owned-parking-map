var wms_layers = [];


        var lyr_openstreetmap_0 = new ol.layer.Tile({
            'title': 'open street map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParkingLotsByCBDistrictGraduated_1 = new ol.format.GeoJSON();
var features_ParkingLotsByCBDistrictGraduated_1 = format_ParkingLotsByCBDistrictGraduated_1.readFeatures(json_ParkingLotsByCBDistrictGraduated_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingLotsByCBDistrictGraduated_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingLotsByCBDistrictGraduated_1.addFeatures(features_ParkingLotsByCBDistrictGraduated_1);
var lyr_ParkingLotsByCBDistrictGraduated_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingLotsByCBDistrictGraduated_1, 
                style: style_ParkingLotsByCBDistrictGraduated_1,
                popuplayertitle: 'Parking Lots By CB District Graduated ',
                interactive: true,
    title: 'Parking Lots By CB District Graduated <br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_1.png" /> 0 - 25000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_2.png" /> 25000 - 50000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_3.png" /> 50000 - 100000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_4.png" /> 100000 - 200000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_5.png" /> 200000 - 400000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_1_6.png" /> 400000 - 800000<br />' });
var format_MTASubwayLines_2 = new ol.format.GeoJSON();
var features_MTASubwayLines_2 = format_MTASubwayLines_2.readFeatures(json_MTASubwayLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTASubwayLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTASubwayLines_2.addFeatures(features_MTASubwayLines_2);
var lyr_MTASubwayLines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTASubwayLines_2, 
                style: style_MTASubwayLines_2,
                popuplayertitle: 'MTA Subway Lines',
                interactive: true,
                title: '<img src="styles/legend/MTASubwayLines_2.png" /> MTA Subway Lines'
            });
var format_MileFromRailTransit_3 = new ol.format.GeoJSON();
var features_MileFromRailTransit_3 = format_MileFromRailTransit_3.readFeatures(json_MileFromRailTransit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MileFromRailTransit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MileFromRailTransit_3.addFeatures(features_MileFromRailTransit_3);
var lyr_MileFromRailTransit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MileFromRailTransit_3, 
                style: style_MileFromRailTransit_3,
                popuplayertitle: '½ Mile From Rail Transit',
                interactive: true,
                title: '<img src="styles/legend/MileFromRailTransit_3.png" /> ½ Mile From Rail Transit'
            });

lyr_openstreetmap_0.setVisible(true);lyr_ParkingLotsByCBDistrictGraduated_1.setVisible(true);lyr_MTASubwayLines_2.setVisible(true);lyr_MileFromRailTransit_3.setVisible(true);
var layersList = [lyr_openstreetmap_0,lyr_ParkingLotsByCBDistrictGraduated_1,lyr_MTASubwayLines_2,lyr_MileFromRailTransit_3];
lyr_ParkingLotsByCBDistrictGraduated_1.set('fieldAliases', {'fid': 'fid', 'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'Name': 'Name', 'count': 'count', 'sum': 'sum', });
lyr_MTASubwayLines_2.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'objectid': 'objectid', 'service_name': 'service_name', 'service': 'service', 'shape_stlength': 'shape_stlength', });
lyr_MileFromRailTransit_3.set('fieldAliases', {'Complex ID': 'Complex ID', 'Is Complex': 'Is Complex', 'Number Of Stations In Complex': 'Number Of Stations In Complex', 'Stop Name': 'Stop Name', 'Display Name': 'Display Name', 'Constituent Station Names': 'Constituent Station Names', 'Station IDs': 'Station IDs', 'GTFS Stop IDs': 'GTFS Stop IDs', 'Borough': 'Borough', 'CBD': 'CBD', 'Daytime Routes': 'Daytime Routes', 'Structure Type': 'Structure Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ADA': 'ADA', 'ADA Notes': 'ADA Notes', });
lyr_ParkingLotsByCBDistrictGraduated_1.set('fieldImages', {'fid': '', 'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'Name': 'TextEdit', 'count': 'Range', 'sum': 'TextEdit', });
lyr_MTASubwayLines_2.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'objectid': 'TextEdit', 'service_name': 'TextEdit', 'service': 'TextEdit', 'shape_stlength': 'TextEdit', });
lyr_MileFromRailTransit_3.set('fieldImages', {'Complex ID': 'Range', 'Is Complex': 'CheckBox', 'Number Of Stations In Complex': 'Range', 'Stop Name': 'TextEdit', 'Display Name': 'TextEdit', 'Constituent Station Names': 'TextEdit', 'Station IDs': 'TextEdit', 'GTFS Stop IDs': 'TextEdit', 'Borough': 'TextEdit', 'CBD': 'CheckBox', 'Daytime Routes': 'TextEdit', 'Structure Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ADA': 'Range', 'ADA Notes': 'TextEdit', });
lyr_ParkingLotsByCBDistrictGraduated_1.set('fieldLabels', {'fid': 'no label', 'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'Name': 'no label', 'count': 'no label', 'sum': 'no label', });
lyr_MTASubwayLines_2.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'header label - visible with data', ':updated_at': 'no label', 'objectid': 'no label', 'service_name': 'no label', 'service': 'no label', 'shape_stlength': 'no label', });
lyr_MileFromRailTransit_3.set('fieldLabels', {'Complex ID': 'no label', 'Is Complex': 'no label', 'Number Of Stations In Complex': 'no label', 'Stop Name': 'no label', 'Display Name': 'no label', 'Constituent Station Names': 'no label', 'Station IDs': 'no label', 'GTFS Stop IDs': 'no label', 'Borough': 'no label', 'CBD': 'no label', 'Daytime Routes': 'no label', 'Structure Type': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ADA': 'no label', 'ADA Notes': 'no label', });
lyr_MileFromRailTransit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});