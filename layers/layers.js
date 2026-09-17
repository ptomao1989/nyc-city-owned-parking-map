var wms_layers = [];

var format_ParkingLotsByCBDistrictGraduated_0 = new ol.format.GeoJSON();
var features_ParkingLotsByCBDistrictGraduated_0 = format_ParkingLotsByCBDistrictGraduated_0.readFeatures(json_ParkingLotsByCBDistrictGraduated_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingLotsByCBDistrictGraduated_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingLotsByCBDistrictGraduated_0.addFeatures(features_ParkingLotsByCBDistrictGraduated_0);
var lyr_ParkingLotsByCBDistrictGraduated_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingLotsByCBDistrictGraduated_0, 
                style: style_ParkingLotsByCBDistrictGraduated_0,
                popuplayertitle: 'Parking Lots By CB District Graduated ',
                interactive: true,
    title: 'Parking Lots By CB District Graduated <br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_1.png" /> 0 - 25000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_2.png" /> 25000 - 50000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_3.png" /> 50000 - 100000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_4.png" /> 100000 - 200000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_5.png" /> 200000 - 400000<br />\
    <img src="styles/legend/ParkingLotsByCBDistrictGraduated_0_6.png" /> 400000 - 800000<br />' });
var format_MTASubwayLines_1 = new ol.format.GeoJSON();
var features_MTASubwayLines_1 = format_MTASubwayLines_1.readFeatures(json_MTASubwayLines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTASubwayLines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTASubwayLines_1.addFeatures(features_MTASubwayLines_1);
var lyr_MTASubwayLines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTASubwayLines_1, 
                style: style_MTASubwayLines_1,
                popuplayertitle: 'MTA Subway Lines',
                interactive: true,
                title: '<img src="styles/legend/MTASubwayLines_1.png" /> MTA Subway Lines'
            });
var format_MileFromRailTransit_2 = new ol.format.GeoJSON();
var features_MileFromRailTransit_2 = format_MileFromRailTransit_2.readFeatures(json_MileFromRailTransit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MileFromRailTransit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MileFromRailTransit_2.addFeatures(features_MileFromRailTransit_2);
var lyr_MileFromRailTransit_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MileFromRailTransit_2, 
                style: style_MileFromRailTransit_2,
                popuplayertitle: '½ Mile From Rail Transit',
                interactive: true,
                title: '<img src="styles/legend/MileFromRailTransit_2.png" /> ½ Mile From Rail Transit'
            });

lyr_ParkingLotsByCBDistrictGraduated_0.setVisible(true);lyr_MTASubwayLines_1.setVisible(true);lyr_MileFromRailTransit_2.setVisible(true);
var layersList = [lyr_ParkingLotsByCBDistrictGraduated_0,lyr_MTASubwayLines_1,lyr_MileFromRailTransit_2];
lyr_ParkingLotsByCBDistrictGraduated_0.set('fieldAliases', {'fid': 'fid', 'boro_cd': 'boro_cd', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'Name': 'Name', 'count': 'count', 'sum': 'sum', });
lyr_MTASubwayLines_1.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'objectid': 'objectid', 'service_name': 'service_name', 'service': 'service', 'shape_stlength': 'shape_stlength', });
lyr_MileFromRailTransit_2.set('fieldAliases', {'Complex ID': 'Complex ID', 'Is Complex': 'Is Complex', 'Number Of Stations In Complex': 'Number Of Stations In Complex', 'Stop Name': 'Stop Name', 'Display Name': 'Display Name', 'Constituent Station Names': 'Constituent Station Names', 'Station IDs': 'Station IDs', 'GTFS Stop IDs': 'GTFS Stop IDs', 'Borough': 'Borough', 'CBD': 'CBD', 'Daytime Routes': 'Daytime Routes', 'Structure Type': 'Structure Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ADA': 'ADA', 'ADA Notes': 'ADA Notes', });
lyr_ParkingLotsByCBDistrictGraduated_0.set('fieldImages', {'fid': '', 'boro_cd': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'Name': 'TextEdit', 'count': 'Range', 'sum': 'TextEdit', });
lyr_MTASubwayLines_1.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'objectid': 'TextEdit', 'service_name': 'TextEdit', 'service': 'TextEdit', 'shape_stlength': 'TextEdit', });
lyr_MileFromRailTransit_2.set('fieldImages', {'Complex ID': 'Range', 'Is Complex': 'CheckBox', 'Number Of Stations In Complex': 'Range', 'Stop Name': 'TextEdit', 'Display Name': 'TextEdit', 'Constituent Station Names': 'TextEdit', 'Station IDs': 'TextEdit', 'GTFS Stop IDs': 'TextEdit', 'Borough': 'TextEdit', 'CBD': 'CheckBox', 'Daytime Routes': 'TextEdit', 'Structure Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ADA': 'Range', 'ADA Notes': 'TextEdit', });
lyr_ParkingLotsByCBDistrictGraduated_0.set('fieldLabels', {'fid': 'no label', 'boro_cd': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'Name': 'no label', 'count': 'no label', 'sum': 'no label', });
lyr_MTASubwayLines_1.set('fieldLabels', {':id': 'no label', ':version': 'no label', ':created_at': 'no label', ':updated_at': 'no label', 'objectid': 'no label', 'service_name': 'no label', 'service': 'no label', 'shape_stlength': 'no label', });
lyr_MileFromRailTransit_2.set('fieldLabels', {'Complex ID': 'no label', 'Is Complex': 'no label', 'Number Of Stations In Complex': 'no label', 'Stop Name': 'no label', 'Display Name': 'no label', 'Constituent Station Names': 'no label', 'Station IDs': 'no label', 'GTFS Stop IDs': 'no label', 'Borough': 'no label', 'CBD': 'no label', 'Daytime Routes': 'no label', 'Structure Type': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ADA': 'no label', 'ADA Notes': 'no label', });
lyr_MileFromRailTransit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});