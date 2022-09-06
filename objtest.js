function isPlainObject(obj) {
    // Start coding here
    let objCheck = typeof(obj) === "object"//true
    let arrCheck = !Array.isArray(obj)
    let nullCheck = obj !== null; //true

    return objCheck && arrCheck && nullCheck

  }
  
  // Example case
  let result1 = isPlainObject({ name: "John" });
  let result2 = isPlainObject(null);
  let result3 = isPlainObject(["apples", "oranges"]);
  
  // ผลลัพธ์ควรที่ได้จาก Example case
  console.log(result1); //true
  console.log(result2); // false
  console.log(result3); // false
  
  const N = null;
  console.log(null === N)

  console.log(null !== null)