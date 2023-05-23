async function ImagetoBase64(file) {
  //
  const reader = new FileReader();
  //    convert
  reader.readAsDataURL(file);

  //   check the file is convert or not
  const data = new Promise((resolve, reject) => {
    // convert to file to base64 url
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (err) => {
      reject(err);
    };
  });
  return data;
}
export { ImagetoBase64 };
