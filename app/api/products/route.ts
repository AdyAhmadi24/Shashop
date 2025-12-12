import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Shopee API configuration
const PARTNER_ID = process.env.SHOPEE_PARTNER_ID;
const PARTNER_KEY = process.env.SHOPEE_PARTNER_KEY;
const SHOP_ID = process.env.SHOPEE_SHOP_ID;
const ACCESS_TOKEN = process.env.SHOPEE_ACCESS_TOKEN;

export async function GET() {
  if (!PARTNER_ID || !PARTNER_KEY || !SHOP_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: 'Shopee API credentials not configured' }, { status: 500 });
  }

  try {
    // Example: Get Item List API
    const timestamp = Math.floor(Date.now() / 1000);
    const path = '/api/v2/product/get_item_list';
    const baseString = `${PARTNER_ID}${path}${timestamp}${ACCESS_TOKEN}${SHOP_ID}`;
    const sign = crypto.createHmac('sha256', PARTNER_KEY).update(baseString).digest('hex');

    const url = `https://partner.shopeemobile.com/api/v2/product/get_item_list?partner_id=${PARTNER_ID}&timestamp=${timestamp}&sign=${sign}&shop_id=${SHOP_ID}&offset=0&page_size=10`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    // Transform data to our format
    const products = data.response.item_list?.map((item: { item_id: number; item_name: string; price: number; image?: { image_url_list?: string[] } }) => ({
      item_id: item.item_id,
      item_name: item.item_name,
      price: item.price,
      image: item.image?.image_url_list?.[0] || '/next.svg',
    })) || [];

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching Shopee products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}