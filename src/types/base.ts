export type ImageLink = {
    metadata: {
        tags: string[];
    };
    sys: {
        space: {
            sys: {
                type: string;
                linkType: string;
                id: string;
            };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
            sys: {
                id: string;
                type: string;
                linkType: string;
            };
        };
        revision: number;
        locale: string;
    };
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: {
                size: number;
                image: {
                    width: number;
                    height: number;
                };
            };
            fileName: string;
            contentType: string;
        };
    };
};