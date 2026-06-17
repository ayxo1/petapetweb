'use server';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export const checkMobile = async () => {
    const headerList = await headers();
    const { device } = userAgent({ headers: headerList });

    return device.type === 'mobile';
};