export function pow(x: number, n:number = 1){
    let $r;
    (x<0)? $r = 0 :
        ((x==0)? $r = 1 : $r = x ** n)
    return $r
}