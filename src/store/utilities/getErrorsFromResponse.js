/**
 * Takes in an server error response and returns a list of errors.
 * @param errorResponse
 * @returns {array}
 */
export default function (errorResponse) {
  function getFieldName(modelState) {
    return modelState.substring(modelState.indexOf('.') + 1);
  }

  function extractErrors(accumulatorArray, [key, value]) {
    function createError(errorMessage) {
      return {
        fieldName: getFieldName(key),
        message: errorMessage,
      };
    }

    const mappedValues = value.map(createError);
    return [...accumulatorArray, ...mappedValues];
  }

  // Use destructuring to always ensure ModelState can be extracted
  const {
    response: {
      data: {
        ModelState = null,
      } = { ModelState: null },
    } = { data: { ModelState: null } },
  } = errorResponse;

  if (ModelState != null) {
    return Object.entries(ModelState).reduce(extractErrors, []);
  }

  return [
    {
      fieldName: null,
      message: 'Sorry, there has been a network error. Please try again later.',
    },
  ];
}
