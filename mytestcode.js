let f; //정의되지 않았다.
{
    let o = { note: 'Safe' };
    f = function() {
        return o;
    };
}
let oRef = f();
console.log(oRef);
oRef.note = "Not so safe after all!";
console.log(oRef);