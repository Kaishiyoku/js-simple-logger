// @flow
import merge from 'ramda/es/merge';
import _keys from 'ramda/es/keys';

export default function objSwitchKeysWithValues(obj: {}) {
    return _keys(obj).reduce((accum, value) => {
        return merge(accum, {
            [obj[value]]: value,
        });
    }, {});
}
