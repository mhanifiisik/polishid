export const polishId = (length: number): string => {
    const polishcharset = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ0123456789';
    let id = '';
    const lengthOfId: number = !isNaN(length) && length > 22 && length < 51 ? length : 22;
    for (let i = 0, n = polishcharset.length; i < lengthOfId; ++i) {
        id += polishcharset.charAt(Math.floor(Math.random() * n));
    }
    return id;
};
export default polishId;
