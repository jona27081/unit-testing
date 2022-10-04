export function circle(x: number){
    let $r;
    (x<=0) ? $r = 0 : $r = 3.1416 * (x**2);
    return $r;
}