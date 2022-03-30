export default {
    name: 'distilleries',
    title: 'Distilleries',
    type: 'document',
    fields: [
        { name: 'is_bookable', title: 'Is Bookable', type: 'boolean' },
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
        { name: 'geopoint', title: 'GeoPoint', type: 'geopoint' },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'badge',
            title: 'Badge',
            type: 'image',
        },
    ],
};
