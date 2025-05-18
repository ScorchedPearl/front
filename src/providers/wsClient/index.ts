const token = localStorage.getItem('__Pearl_Token');
export const WS_URL = `ws://pearlpost-back.pearl99z.tech?token=${token}`;