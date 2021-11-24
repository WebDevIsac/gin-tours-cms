export default {
    name: 'distilleries',
    title: 'Distilleries',
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
        { name: 'place', title: 'Place', type: 'string' },
        {
            name: 'image',
            title: 'Image',
            type: 'figure',
        },
        {
            name: 'badge',
            title: 'Badge',
            type: 'image',
        },
    ],
};
