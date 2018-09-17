"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttributesObject = function (map) {
    var attributes = [];
    for (var i = 0; i < map.length; i++) {
        attributes.push({
            name: map[i].name,
            value: map[i].value,
        });
    }
    return attributes;
};
