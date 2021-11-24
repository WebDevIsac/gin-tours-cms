export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
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
            title: 'Dates',
            name: 'dates',
            type: 'array',
            of: [
                {
                    title: 'Date',
                    type: 'date',
                },
            ],
        },
    ],
};
