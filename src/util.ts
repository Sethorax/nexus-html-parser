import { Attribute } from "@sethorax/nexus";

export const getAttributesObject = (map: NamedNodeMap): Attribute[] => {
    const attributes = [];

    for (let i = 0; i < map.length; i++) {
        attributes.push({
            name: map[i].name,
            value: map[i].value,
        });
    }

    return attributes;
};
