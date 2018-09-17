import { NexusParser, NexusParsedData } from "@sethorax/nexus";
export interface HTMLParserConfig {
    contentRootSelector: string;
}
export declare class NexusHTMLParser extends NexusParser {
    private config;
    constructor(config: HTMLParserConfig);
    parse(rawData: string): NexusParsedData;
}
