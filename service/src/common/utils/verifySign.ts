/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-18 17:54:43
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-09-05 00:07:07
 * @FilePath: /std/chat/src/utils/functions/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as crypto from 'crypto';

export function generateVerifySign(params: { [key: string]: string | number | undefined }): string {
  const filteredParams = Object.entries(params)
    .filter(([key, value]) => key !== 'verifySign' && value !== '')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)); // 2. 按字典顺序排序

  // 3. 构造排序后的查询字符串
  const queryString = filteredParams.map(([key, value]) => `${key}=${value}`).join('&');

  // 4. 在查询字符串末尾加上 &token
  const tokenHash = crypto
    .createHash('md5')
    .update(process.env.VERIFYTOKEN || '')
    .digest('hex');
  const stringToSign = `${queryString}&${tokenHash}`;

  // 5. 计算字符串的 MD5 值
  const md5Hash = crypto.createHash('md5').update(stringToSign).digest('hex');

  console.log(md5Hash);

  return md5Hash;
}

// 生成随机的code_verifier
export function generateCodeVerifier(length = 128): string {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let codeVerifier = '';
  for (let i = 0; i < length; i++) {
    codeVerifier += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return codeVerifier;
}

export function generateCodeChallenge(codeVerifier: string): string {
  const hash = crypto.createHash('sha256').update(codeVerifier).digest('base64');
  return base64URL(hash);
}

export function base64URL(str: string): string {
  return str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
