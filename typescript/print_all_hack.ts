/* Just a bit of hacking from the narrowing topic in TS handbook
https://www.typescriptlang.org/docs/handbook/2/narrowing.html
Note need to check "strs && ..." because null is also typeof object
This is looking to iterate arrays but I wanted to see if it worked for objects.
Added it.
*/

function printAll(strs: string | string[] | object |  null) {
    if (strs && Array.isArray(strs)) {
      for (const s of strs) {
        console.log(s);
      }
    } else if (strs && typeof strs === "object") {
        for (const [key, value] of Object.entries(strs)) {
            console.log(`\t${key}: ${value}`);
        }        
    } else if (typeof strs === "string") {
      console.log(strs); 
    }
  }

  
  const arr = ['Moe', 'Larry', 'Curly']
  const obj = {chicken: "Foghorn", age: 75}
  printAll(obj);