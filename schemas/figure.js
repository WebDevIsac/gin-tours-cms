export default {
    name: 'figure',
    title: 'Figure',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
    ],
};
