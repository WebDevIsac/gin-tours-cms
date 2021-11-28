export default {
    name: 'recipes',
    title: 'Recipes',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
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
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'ingredients',
            title: 'Ingredient',
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
    ],
};
