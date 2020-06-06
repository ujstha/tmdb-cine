const generateObj = (obj, arr, val) => {
  if (arr.length === 1) {
    obj[arr[0]] = val;
    return;
  }
  if (!obj[arr[0]]) {
    obj[arr[0]] = {};
  }
  const restArr = arr.splice(1);
  generateObj(obj[arr[0]], restArr, val);
};

export const getData = (id) => {
  const form = document.getElementById(id);
  const inputCollection = form.getElementsByTagName('input');
  const inputArray = [...inputCollection];
  const data = {};
  inputArray.map((input) => {
    const { name, value } = input;
    const splitName = name.split('.');
    return generateObj(data, splitName, value);
  });
  return data;
};
