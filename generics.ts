// generics
function getage<T>(age : T):T{
    return age;

}
getage<number>(20)
getage<string>("20")
