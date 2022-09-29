import { compute } from './compute';

describe('compute test suite', () => {
    it('shoul return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment the input its positive', () => {
        const result =compute(1);
        expect(result).toBe(2);
    })
})