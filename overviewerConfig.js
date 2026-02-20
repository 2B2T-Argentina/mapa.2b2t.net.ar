var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },

    "worlds": ["world"],

    "map": {
        "debug": false,
        "cacheTag": "historical_archive",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": false,
            "compass": true,
            "mapType": true,
            "overlays": false,
            "coordsBox": true
        }
    },

    "tilesets": [

        {
            "name": "2023-04-12",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "2023-04-12",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "imgextension": "png",
            "isOverlay": false,
            "center": [-143, 320, 120],
            "north_direction": 0
        },

        {
            "name": "2023-04-22",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "2023-04-22",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "imgextension": "png",
            "isOverlay": false,
            "center": [467, 320, 516],
            "north_direction": 0
        },

        {
            "name": "2025-02-18",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "2025-02-18",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "imgextension": "png",
            "isOverlay": false,
            "center": [8, 64, -88],
            "north_direction": 0
        }

    ]
};