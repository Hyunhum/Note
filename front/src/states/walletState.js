import { atom, selector } from 'recoil';
 
export const walletState = atom({
    key: 'walletState',
    default: ""
});

export const walletSelector = selector({
    key: 'walletSelector',
    get: ({ get }) => {
        const wallet = get(walletState);
        return `현재 지갑 주소는 ${wallet} 입니다.`;
    }
});