import { NexusParser, NexusParseError } from '@sethorax/nexus';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var getAttributesObject = function (map) {
    var attributes = [];
    for (var i = 0; i < map.length; i++) {
        attributes.push({
            name: map[i].name,
            value: map[i].value,
        });
    }
    return attributes;
};

var NexusHTMLParser = /** @class */ (function (_super) {
    __extends(NexusHTMLParser, _super);
    function NexusHTMLParser(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    NexusHTMLParser.prototype.parse = function (rawData) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(rawData, "text/html");
        var contentRootSelector = this.config.contentRootSelector;
        var contentRoot = doc.querySelector(contentRootSelector);
        if (contentRoot) {
            return {
                content: contentRoot.innerHTML,
                title: doc.title,
                contentRootAttributes: getAttributesObject(contentRoot.attributes),
                bodyAttributes: getAttributesObject(doc.body.attributes),
                htmlAttributes: getAttributesObject(doc.documentElement.attributes),
            };
        }
        else {
            throw new NexusParseError("No match for selector " + contentRootSelector + " found!");
        }
    };
    return NexusHTMLParser;
}(NexusParser));

export { NexusHTMLParser };
