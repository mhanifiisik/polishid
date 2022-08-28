import { polishId } from '../src';

test('check for minus values', () => {
    expect(polishId(-2)).toHaveLength(22);
});

test('normal value', () => {
    expect(polishId(33)).toHaveLength(33);
});

test('big num', () => {
    expect(polishId(10e5)).toHaveLength(22);
});

test('check for strings', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(polishId('10e5')).toHaveLength(22);
});
