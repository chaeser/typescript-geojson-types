/**
 * Readonly type definition for a GeoJSON Position.
 */
export type RoPosition = readonly [number, number, ...number[]];

/**
 * Readonly type definition for a GeoJSON LinearRing.
 */
export type RoLinearRing = [RoPosition, RoPosition, RoPosition, RoPosition, ...RoPosition[]];

/**
 * Readonly type definition for a GeoJSON BoundingBox.
 */
export type RoBoundingBox = readonly [number, number, number, number, ...number[]];

/**
 * Readonly type definition for GeoJSON Properties.
 */
export type RoProperties = { readonly [key: string]: any };

/**
 * Readonly type definition for a GeoJSON Object.
 */
interface RoObject {
    readonly type: string;
    readonly bbox?: RoBoundingBox;

    // the specification allows foreign members
    readonly [key: string]: any
}

/**
 * Readonly type definition for a GeoJSON Point.
 */
export interface RoPoint extends RoObject {
    readonly type: 'Point';
    readonly coordinates: RoPosition;
}

/**
 * Readonly type definition for a GeoJSON MultiPoint.
 */
export interface RoMultiPoint extends RoObject {
    readonly type: 'MultiPoint';
    readonly coordinates: readonly (RoPoint['coordinates'])[];
}

/**
 * Readonly type definition for a GeoJSON LineString.
 */
export interface RoLineString extends RoObject {
    readonly type: 'LineString';
    readonly coordinates: readonly [RoPosition, RoPosition, ...RoPosition[]];
}

/**
 * Readonly type definition for a GeoJSON MultiLineString.
 */
export interface RoMultiLineString extends RoObject {
    readonly type: 'MultiLineString';
    readonly coordinates: readonly (RoLineString['coordinates'])[];
}

/**
 * Readonly type definition for a GeoJSON Polygon.
 */
export interface RoPolygon extends RoObject {
    readonly type: 'Polygon';
    readonly coordinates: readonly RoLinearRing[];
}

/**
 * Readonly type definition for a GeoJSON multi MultiPolygon.
 */
export interface RoMultiPolygon extends RoObject {
    readonly type: 'MultiPolygon';
    readonly coordinates: readonly (RoPolygon['coordinates'])[];
}

/**
 * Readonly type definition for a GeoJSON Geometry.
 */
export type RoGeometry = RoPoint | RoMultiPoint
    | RoLineString | RoMultiLineString
    | RoPolygon | RoMultiPolygon
    | RoGeometryCollection;

/**
 * Readonly type definition for a GeoJSON GeometryCollection.
 */
export interface RoGeometryCollection<T extends RoGeometry = RoGeometry> extends RoObject {
    readonly type: 'GeometryCollection';
    readonly geometries: readonly T[];
}

/**
 * Readonly type definition for a GeoJSON Feature.
 */
export interface RoFeature<T extends RoGeometry = RoGeometry> extends RoObject {
    readonly type: 'Feature';
    readonly geometry: T | null;
    readonly properties: RoProperties | null;
}

/**
 * Readonly type definition for a GeoJSON FeatureCollection.
 */
export interface RoFeatureCollection<T extends RoGeometry = RoGeometry> extends RoObject {
    readonly type: 'FeatureCollection';
    readonly features: readonly RoFeature<T>[];
}
