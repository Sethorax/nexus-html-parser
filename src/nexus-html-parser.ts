import { NexusParser, NexusParseError, NexusParsedData } from "@sethorax/nexus";
import { getAttributesObject } from "./util";

export interface HTMLParserConfig {
    contentRootSelector: string;
}

export class NexusHTMLParser extends NexusParser {
    private config: HTMLParserConfig;

    public constructor(config: HTMLParserConfig) {
        super();

        this.config = config;
    }

    public parse(rawData: string): NexusParsedData {
        const parser = new DOMParser();
        const doc = parser.parseFromString(rawData, "text/html");
        const { contentRootSelector } = this.config;

        const contentRoot = doc.querySelector(contentRootSelector);

        if (contentRoot) {
            return {
                content: contentRoot.innerHTML,
                title: doc.title,
                contentRootAttributes: getAttributesObject(
                    contentRoot.attributes
                ),
                bodyAttributes: getAttributesObject(doc.body.attributes),
                htmlAttributes: getAttributesObject(
                    doc.documentElement.attributes
                ),
            };
        } else {
            throw new NexusParseError(
                `No match for selector ${contentRootSelector} found!`
            );
        }
    }
}
