export default {
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'fullName', title: 'Full Name', type: 'string' },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'distillery',
            type: 'reference',
            to: [
                {
                    type: 'distilleries',
                },
            ],
        },
        {
            name: 'type',
            type: 'reference',
            to: [
                {
                    type: 'types',
                },
            ],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [
                {
                    title: 'Ingredient',
                    type: 'string',
                },
            ],
        },
        {
            name: 'ingredientsQuickLook',
            title: 'Ingredients Quick Look',
            type: 'array',
            of: [
                {
                    title: 'Ingredient',
                    type: 'string',
                },
            ],
        },
        {
            name: 'instructions',
            title: 'Instructions',
            type: 'richText',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'showMoreInfo',
            title: 'Show more info field',
            type: 'boolean',
        },
        {
            name: 'moreInfo',
            title: 'More Info',
            type: 'richText',
            hidden: ({ document }) => !document?.showMoreInfo,
        },
    ],
};
