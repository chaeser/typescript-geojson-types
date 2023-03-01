// noinspection JSUnusedLocalSymbols

import {
    RoFeature,
    RoFeatureCollection,
    RoGeometryCollection,
    RoLineString,
    RoMultiLineString,
    RoMultiPoint,
    RoMultiPolygon,
    RoPoint,
    RoPolygon
} from "./geojson-types";

const point: RoPoint = {
    "type": "Point",
    "coordinates": [100.0, 0.0]
};

const multiPoint: RoMultiPoint = {
    "type": "MultiPoint",
    "coordinates": [
        [100.0, 0.0],
        [101.0, 1.0]
    ]
};

const lineString: RoLineString = {
    "type": "LineString",
    "coordinates": [
        [100.0, 0.0],
        [101.0, 1.0]
    ]
};

const multiLineString: RoMultiLineString = {
    "type": "MultiLineString",
    "coordinates": [
        [
            [100.0, 0.0],
            [101.0, 1.0]
        ],
        [
            [102.0, 2.0],
            [103.0, 3.0]
        ]
    ]
};

const polygon: RoPolygon = {
    "type": "Polygon",
    "coordinates": [
        [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
            [100.0, 0.0]
        ]
    ]
};

const polygonWithHoles: RoPolygon = {
    "type": "Polygon",
    "coordinates": [
        [
            [100.0, 0.0],
            [101.0, 0.0],
            [101.0, 1.0],
            [100.0, 1.0],
        ],
        [
            [100.8, 0.8],
            [100.8, 0.2],
            [100.2, 0.2],
            [100.2, 0.8],
            [100.8, 0.8]
        ]
    ]
};

const polygonWithBbox: RoPolygon = {
    "type": "Polygon",
    "bbox": [-10.0, -10.0, 10.0, 10.0],
    "coordinates": [
        [
            [-10.0, -10.0],
            [10.0, -10.0],
            [10.0, 10.0],
            [-10.0, -10.0]
        ]
    ]
};

const multiPolygon: RoMultiPolygon = {
    "type": "MultiPolygon",
    "coordinates": [
        [
            [
                [102.0, 2.0],
                [103.0, 2.0],
                [103.0, 3.0],
                [102.0, 3.0],
                [102.0, 2.0]
            ]
        ],
        [
            [
                [100.0, 0.0],
                [101.0, 0.0],
                [101.0, 1.0],
                [100.0, 1.0],
                [100.0, 0.0]
            ],
            [
                [100.2, 0.2],
                [100.2, 0.8],
                [100.8, 0.8],
                [100.8, 0.2],
                [100.2, 0.2]
            ]
        ]
    ]
};

const emptyGeometryCollection: RoGeometryCollection = {
    "type": "GeometryCollection",
    "geometries": []
};

const geometryCollection: RoGeometryCollection = {
    "type": "GeometryCollection",
    "geometries": [
        {
            "type": "Point",
            "coordinates": [100.0, 0.0]
        },
        {
            "type": "LineString",
            "coordinates": [
                [101.0, 0.0],
                [102.0, 1.0]
            ]
        }
    ]
};

const geometryCollectionWithBbox: RoGeometryCollection = {
    "type": "GeometryCollection",
    "bbox": [-10.0, -10.0, 10.0, 10.0],
    "geometries": [
        {
            "type": "Polygon",
            "coordinates": [
                [
                    [-10.0, -10.0],
                    [10.0, -10.0],
                    [10.0, 10.0],
                    [-10.0, -10.0]
                ]
            ]
        }
    ]
};

const geometryCollectionWithType: RoGeometryCollection<RoPolygon> = {
    "type": "GeometryCollection",
    "geometries": [
        polygon,
        polygonWithHoles,
        polygonWithBbox
    ]
};

const emptyFeature: RoFeature = {
    "type": "Feature",
    "geometry": null,
    "properties": null
};

const featureWithPoint: RoFeature = {
    "type": "Feature",
    "geometry": point,
    "properties": null
};

const featureWithMultiPoint: RoFeature = {
    "type": "Feature",
    "geometry": multiPoint,
    "properties": null
};

const featureWithLineString: RoFeature = {
    "type": "Feature",
    "geometry": lineString,
    "properties": null
};

const featureWithMultiLineString: RoFeature = {
    "type": "Feature",
    "geometry": multiLineString,
    "properties": null
};

const featureWithPolygon: RoFeature = {
    "type": "Feature",
    "geometry": polygon,
    "properties": null
};

const featureWithMultiPolygon: RoFeature = {
    "type": "Feature",
    "geometry": multiPolygon,
    "properties": null
};

const featureWithGeometryCollection: RoFeature = {
    "type": "Feature",
    "geometry": geometryCollection,
    "properties": null
};

const featureWithProperties: RoFeature = {
    "type": "Feature",
    "geometry": null,
    "properties": {
        "a": 1,
        "b": "two",
        "c": {
            "d": "..."
        }
    }
};

const featureWithBbox: RoFeature = {
    "type": "Feature",
    "bbox": [-10.0, -10.0, 10.0, 10.0],
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-10.0, -10.0],
                [10.0, -10.0],
                [10.0, 10.0],
                [-10.0, -10.0]
            ]
        ]
    },
    "properties": null,
};

const featureWithForeignMembers: RoFeature = {
    "type": "Feature",
    "id": "f1",
    "geometry": null,
    "properties": null,
    "title": "Example Feature"
};

const featureWithType: RoFeature<RoPolygon> = {
    "type": "Feature",
    "geometry": polygon,
    "properties": null,
}

const featureCollection: RoFeatureCollection = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [102.0, 0.5]
            },
            "properties": {
                "prop0": "value0"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [102.0, 0.0],
                    [103.0, 1.0],
                    [104.0, 0.0],
                    [105.0, 1.0]
                ]
            },
            "properties": {
                "prop0": "value0",
                "prop1": 0.0
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [100.0, 0.0],
                        [101.0, 0.0],
                        [101.0, 1.0],
                        [100.0, 1.0],
                        [100.0, 0.0]
                    ]
                ]
            },
            "properties": {
                "prop0": "value0",
                "prop1": {
                    "this": "that"
                }
            }
        }
    ]
};

const featureCollectionWith2dBbox: RoFeatureCollection = {
    "type": "FeatureCollection",
    "bbox": [100.0, 0.0, 105.0, 1.0],
    "features": [
        //...
    ]
};

const featureCollectionWith3dBbox: RoFeatureCollection = {
    "type": "FeatureCollection",
    "bbox": [100.0, 0.0, -100.0, 105.0, 1.0, 0.0],
    "features": [
        //...
    ]
};

const featureCollectionWithType: RoFeatureCollection<RoPolygon> = {
    "type": "FeatureCollection",
    "bbox": [100.0, 0.0, -100.0, 105.0, 1.0, 0.0],
    "features": [
        featureWithType
    ]
};
