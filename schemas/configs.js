export default {
    name: 'configs',
    title: 'Configs',
    type: 'document',
    fields: [
        {
            name: 'pin',
            title: 'Pin',
            type: 'image',
        },
        {
            name: 'desktopImage',
            title: 'Desktop Image',
            type: 'image',
        },
        {
            name: 'mobileImage',
            title: 'Mobile Image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'Config',
        },
    },
};
