import { ImageResponse } from '@vercel/og';
import Image from 'next/image';

export async function GET(request) {
  // console.log(request);
  const { search } = new URL(request.url);
  const productImageURL = search.replace("?productImageURL=", "")
  console.log(productImageURL)
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          padding: '10px 40px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={productImageURL}
          style={{
            width: "100%",
            height:"100%",
            objectFit: "contain",
          }}
        />

      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}