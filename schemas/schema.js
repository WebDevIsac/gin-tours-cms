// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas

import figure from './figure';
import richText from './richText';
import groupPrice from './groupPrice';
import dateObject from './dateObject';

import products from './products';
import recipes from './recipes';
import distilleries from './distilleries';
import configs from './configs';
import types from './types';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // Used objects
        figure,
        richText,
        groupPrice,
        dateObject,

        // Documents
        recipes,
        products,
        distilleries,
        configs,
        types,
    ]),
});
