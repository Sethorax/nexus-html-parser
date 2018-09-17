"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var nexus_1 = require("@sethorax/nexus");
var util_1 = require("./util");
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
                contentRootAttributes: util_1.getAttributesObject(contentRoot.attributes),
                bodyAttributes: util_1.getAttributesObject(doc.body.attributes),
                htmlAttributes: util_1.getAttributesObject(doc.documentElement.attributes),
            };
        }
        else {
            throw new nexus_1.NexusParseError("No match for selector " + contentRootSelector + " found!");
        }
    };
    return NexusHTMLParser;
}(nexus_1.NexusParser));
exports.NexusHTMLParser = NexusHTMLParser;
