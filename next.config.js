/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/shopmayven-9e0fa.appspot.com/o/**',
          },
        //   {
        //     protocol: 'https',
        //     hostname: 'firebasestorage.googleapis.com',
        //     port: '',
        //     pathname: '/v0/b/shopmayven-9e0fa.appspot.com/o/shopmayvenImages/**',
        //   },
        //   {
        //     protocol: 'https',
        //     hostname: 'firebasestorage.googleapis.com',
        //     port: '',
        //     pathname: '/v0/b/shopmayven-9e0fa.appspot.com/o/logos/**',
        //   },
        ],
      }
}

module.exports = nextConfig
