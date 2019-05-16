// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
export function transformToCamelCase(obj) {
  if (!_.isObject(obj)) {
    return obj;
  } else if (_.isArray(obj)) {
    return obj.map((v) => transformToCamelCase(v));
  }
  return _.reduce(obj, (r, v, k) => {
    return {
      ...r,
      [_.camelCase(k)]: transformToCamelCase(v)
    };
  }, {});
};